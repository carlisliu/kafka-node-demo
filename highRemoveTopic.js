var kafka = require('kafka-node');
var HighLevelConsumer = kafka.HighLevelConsumer;
var client = kafka.Client('10.194.1.2:2181');

var consumer = new HighLevelConsumer(client, [{
				topic: 't5',
				partition: 0
			}
		], {
		autoCommit: false
	});

consumer.addTopics(['t5'], function (err, add) {

	console.log('add topic success');

});

consumer.on('message', function (data) {

	console.log(data);
});

consumer.removeTopics(['t5'], function () {

	console.log("remove topic success");

});
