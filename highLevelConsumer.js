var kafka = require('kafka-node');
var HighLevelConsumer = kafka.HighLevelConsumer;
var client = kafka.Client('10.194.1.2:2181');
var argv = {
	topic:"topic1"	
}

var topic = argv.topic || "topic1";

var highConsumer = new HighLevelConsumer(client,[{ topic : topic, partition :0}],{ autoCommit:false});
// var Consumer = new Consumer(client,[{ topic : topic, partition :0}],{ autoCommit:false});
// var highConsumer = new highLevelConsumer(client,[{topic:topic, partition :0}],{ groupId: 'my-group'});

highConsumer.on('message',function(message){
	console.log(message);
	
});