var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var Client = kafka.Client;
var client = new Client('10.194.1.2:2181')

var argv = {
    topic: "t1"
};

var topic = argv.topic || 't1';

var topics = [{
        topic: topic,
        partition: 0
    }],
    options = {
        autoCommit: false
    };

var consumer = new Consumer(client, topics, options);
consumer.on('message', function(message) {
    console.log(message);
});
