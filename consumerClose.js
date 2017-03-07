var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var client = new kafka.Client('10.194.1.2:2181');


var argv = {  
    topic: "topic1"  
};  

var topic = argv.topic || 'topic1';


client.on('ready', function(){
	console.log('ready');
	consumer.close(true, function(){console.log(arguments)});
});

client.on('error', function(err){
	console.log('client err', err);
})

var consumer = new Consumer(client, [{topic: topic, partition: 0}], {autoCommit: false});

consumer.on('error', function(err){
	console.log('consumer err', err);
})

// consumer.on('ready',function(err,data){
	
	// console.log(err);
	// console.log(data);
	
	// console.log('123');
// consumer.close(function(err,data){
	
	// console.log('hello');
	// console.log(err);
	
	// console.log(data);
	
// });
// });

consumer.on('message',function(message){
	
	//console.log(message);
	
	// process.nextTick(function(){
		
// consumer.close(function(err,data){
	
	// console.log('hello');
	// console.log(err);
	
	// console.log(data);
	
// });
	// })
	
});
