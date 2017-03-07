var kafka =require('kafka-node');
var Consumer = kafka.Consumer;
var Client = kafka.Client; 

var client = new Client('localhost:2181');
consumer = new Consumer(
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
	consumer.removeTopics(['t5', 't6'], function (err, removed) {
	console.log(removed);
	console.log(err);		
});},true);

consumer.on('message', function (message) {
    console.log(message);
});




