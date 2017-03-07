var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var client = new kafka.Client('10.194.1.2:2181');

var argv = {  
    topic: "topic1"  
};  

var topic = argv.topic || 'topic1';


var consumer = new Consumer(client, [{ topic: topic, partition: 0}], {autoCommit: false});

consumer.pause();

// consumer.addTopic(['topic1'],function(err,data){
consumer.on('message',function(message){
		
		
	console.log(message);
});

// });

// consumer.resume();



consumer.on('message',function(message){
		
		
	console.log(message);
});