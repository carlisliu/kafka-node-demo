+var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var Client = kafka.Client;
var client = new Client('10.194.1.2:2181')
	var argv = process.argv;
var topics = argv && argv.slice(2) || [];
topics = topics.map(function (t) {
		return {
			topic: t,
			partition: 0
		};
	});
var options = {
	autoCommit: false
};
console.log(topics);
var consumer = new Consumer(client, topics, options);
consumer.on('message', function (message) {
	console.log(message);
});