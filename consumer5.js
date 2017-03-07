var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var Client = kafka.Client;
var client = new Client('localhost:2181')


// var argv = {  
    // topic: "thaync"  
// };  

// var topic = argv.topic || 'thaync';  

// var topics = [{topic: topic, partition: 0}], options = {autoCommit: false};
// console.log(topics);
var consumer = new Consumer(client, topics, options);  
// consumer.on('message',function(message){
		
	// console.log(message);
	
// });

consumer.addTopics([{topic:'t1', offset:10}], function (err, added) {
	if(err){
	console.log(err);
	}
	
	
},true);
