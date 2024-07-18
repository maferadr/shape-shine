//Import aws-sdk package
const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.update({
    region: 'us-east-2',
});
const dynamodb = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

console.log('Importing meals into DynamoDB. Please wait.');
const allMeals = JSON.parse(
    fs.readFileSync('./server/seed/meals.json', 'utf-8'),
);

allMeals.forEach(meal => {
    const params = {
        TableName: 'Meals',
        Item: {
            "name": meal.name,
            "description": meal.description,
            "time": meal.time
        }
    };

    dynamodb.put(params, (err, data) =>{
        if(err){
            console.error('Unable to add Meal', meal.name, 'Error JSON', JSON.stringify(err, null, 2));
        }else{
            console.log('PutItem Succeeded:', meal.name);
        }
    });
});
