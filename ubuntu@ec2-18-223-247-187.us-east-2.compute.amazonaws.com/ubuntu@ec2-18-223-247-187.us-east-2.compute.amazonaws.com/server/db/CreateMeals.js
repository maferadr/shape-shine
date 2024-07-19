//Importing aws-sdk
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

//Dynamodb service object
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

//params object that holds the data and metadata of the table
const params = {
    TableName: 'Meals',
    KeySchema: [
        { AttributeName: 'name', KeyType: 'HASH' },
        { AttributeName: 'time', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
        { AttributeName: 'name', AttributeType: 'S' },
        { AttributeName: 'time', AttributeType: 'N' },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
    },
};

//Call the dynamodb instance to create the table with the declared params
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

