const express = require('express');
const router = express.Router();

//configuring the service interface
const AWS = require('aws-sdk');
const awsConfig = {
    region: 'us-east-2',
};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const workoutsTable = 'Workouts';
const mealsTable = 'Meals';

//Create the GET route to access all workouts / meals
//Setting up API endpoints
router.get('/workouts', (req, res) =>{
    const params = {
        TableName: workoutsTable,
    };
    //Scan return all items in the table
    dynamodb.scan(params, (err, data) =>{
        if(err){
            res.status(500).json(err); //detecting an error in the if conditional.
        }else{
            res.json(data.Items);
        }
    });
});

router.get('/meals', (req, res)=>{
    const params = {
        TableName: mealsTable,
    };
    //Scan return all items in the table
    dynamodb.scan(params, (err, data) =>{
        if(err){
            res.status(500).json(err);
        }else{
            res.json(data.Items);
        }
    })
});

//Create the GET route to Access all Plans from a specific workout.
router.get('/workouts/:name', (req, res) =>{
    console.log(`Querying for workouts from ${req.params.name}.`);

    //Declaring parameters according to the name
    const params = {
        TableName: workoutsTable,
        KeyConditionExpression: '#un = :name',
        ExpressionAttributeNames: {
            '#un': 'name',
            '#du': 'duration',
            '#de': 'description',
        },
        ExpressionAttributeValues: {
            ':name': req.params.name,
        },
        ProjectionExpression: '#du, #de',
        ScanIndexForward: false,
    };

    dynamodb.query(params, (err, data)=>{
        if(err){
            console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
            res.status(500).json(err);
        }else{
            console.log('Query succeeded');
            res.json(data.Items)
        }
    });
});

//Create the GET route to Access meal plans from a Specific time of the day
// Either breakfast, lunch or dinner.
router.get('/meals/:name', (req, res) =>{
    console.log(`Querying for Meals from ${req.params.name}.`);

    //Declaring parameters according to the name
    const params = {
        TableName: mealsTable,
        KeyConditionExpression: '#un = :name',
        ExpressionAttributeNames: {
            '#un': 'name',
            '#de': 'description',
            '#ti': 'time'
        },
        ExpressionAttributeValues: {
            ':name': req.params.name,
        },
        ProjectionExpression: '#de, #ti',
        ScanIndexForward: true,
    };

    dynamodb.query(params, (err, data)=>{
        if(err){
            console.error('Unable to query. Error: ', JSON.stringify(err, null, 2));
            res.status(500).json(err);
        }else{
            console.log('Query succeeded');
            res.json(data.Items)
        }
    });
});

module.exports = router;
