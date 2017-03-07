var kafka = require('kafka-node');
var HighLevelConsumer = kafka.HighLevelConsumer;
var client = new kafka.Client('10.194.1.2:2181');
var argv = {
	topic: "topic1"
};
var topic = argv.topic || topic1;
var consumer = new HighLevelConsumer(client, [{
				topic: topic,
				partition: 0
			}
		], {
		autoCommit: false
	});

consumer.setOffset('topic1', 0, 0);
consumer.on('message', function (data) {
	console.log(data);
});



