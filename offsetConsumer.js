var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var client = new kafka.Client('localhost:2181');

var consumer = new Consumer(client, [{
				topic: 't12',
				offset: 0,
				partition: 0
			}
		], {
		autoCommit: false
	});

// var consumer = new Consumer(client,[{topic:'t12'}],{ autoCommit: false});


consumer.setOffset('t12', 0, 2);

consumer.addTopics(['t12'], function (err, added) {
	consumer.on('message', function (message) {

		console.log(message);
	});
	if (err)
		console.log(err);
});






// consumer.setOffset('t7', 1, 1);

