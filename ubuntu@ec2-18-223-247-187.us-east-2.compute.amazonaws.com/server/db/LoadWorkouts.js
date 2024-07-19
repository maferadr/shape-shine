//Call aws-sdk to connect the interface with the web service
const AWS = require('aws-sdk');
//File System Package to read and write files from the json file.
const fs = require('fs');

AWS.config.update({
    region: 'us-east-2',
});
//Dynamodb DocumentClient class to enable use JavaScript objects and return native JS types.
const dynamodb = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
});

console.log('Importing workouts into Dynamodb. Please Wait.');
const allWorkouts = JSON.parse(
    fs.readFileSync('./server/seed/workouts.json', 'utf-8'),
);

allWorkouts.forEach(workout =>{
    const params = {
        TableName: 'Workouts',
        Item: {
            'name': workout.name,
            'duration': workout.duration,
            'description': workout.description
        }
    };

    dynamodb.put(params, (err, data) =>{
        if(err){
            console.error('Unable to add Workout', workout.name, 'Error JSON:', JSON.stringify(err, null, 2));
        }else{
            console.log('PuItem succeeded:', workout.name);
        }
    });
});

