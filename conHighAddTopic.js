var kafka = require('kafka-node');
var HighLevelConsumer = kafka.HighLevelConsumer;
var client = new kafka.Client('10.194.1.2:2181');

var consumer = new HighLevelConsumer(
	client,
	[{topic:'t5'}],
	{
		autoCommit:false
		
	}
		
);
// var highConsumer = new HighLevelConsumer(client,[{topic:topic,partition:0}],{autoCommit:false});

consumer.addTopics(['t5'], function (err, added) {
	
	console.log(added);
},true);

consumer.on('message',function(message){
	console.log(message);
	
});