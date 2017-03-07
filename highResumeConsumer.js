var kafka = require('kafka-node');
var HighLevelConsumer = kafka.HighLevelConsumer;
var client = new kafka.Client('10.194.1.2:2181');

var argv = process.argv;

var topic = argv && argv.slice(2) || [];

if (typeof(topic)==="undefind"){
	
	console.log("topic undefind");
}

var consumer = new HighLevelConsumer(client, [{
				topic: topic,
				partition: 0
			}
		], {
		autoCommit: false
	});
	
consumer.on('message',function(data){
	console.log(data, 1);
	
	consumer.pause();
	
	consumer.resume();
	
});





