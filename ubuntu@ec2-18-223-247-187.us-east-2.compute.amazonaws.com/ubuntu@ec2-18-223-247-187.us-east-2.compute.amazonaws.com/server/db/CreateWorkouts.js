//SDK to connect the local database instance to the Web Service
const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-2',
});

//Create the dynamodb service object
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

//Parameters object to hold the schema and metadata of the table
const params = {
    TableName: 'Workouts',
    KeySchema: [
        { AttributeName: 'name', KeyType: 'HASH' },
        { AttributeName: 'duration', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
        { AttributeName: 'name', AttributeType: 'S' },
        { AttributeName: 'duration', AttributeType: 'N' },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
    },
};

//Call the dynamodb instance to create a table
dynamodb.createTable(params, (err, data) =>{
    if(err){
        console.error(
            'Unable to create table. Error JSON:',
            JSON.stringify(err, null, 2),
        );
    }else{
        console.log(
            'Created table. Table description JSON:',
            JSON.stringify(data, null, 2),
        );
    }
});

