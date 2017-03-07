var kafka =require('kafka-node');
var Consumer = kafka.Consumer;
var Client = kafka.Client; 
var client = new Client('10.194.1.2:2181');
var consumer = new Consumer(
        client,
        [
            { topic: 't5' }, { topic: 't6'}
        ],
        {
            autoCommit: false
        }
    );

consumer.addTopics(['t5', 't6'], function (err, added) {
	
	console.log(added);
	

	
	
},true);


	consumer.on('message', function (message) {
    console.log(message);
});