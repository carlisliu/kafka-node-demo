//require('tingyun');
var kafka = require('kafka-node')
var Consumer = kafka.Consumer;
var client = new kafka.Client('10.194.1.2:2181');
var consumer = new Consumer(
    client, [{
        topic: 'topic-nodejs-lym-01',
        partition: 0
    }/*, {
        topic: 'topic-nodejs-lym-02',
        partition: 1
    }*/], {
        autoCommit: false
    }
);

consumer.on('message', function(message) {
    console.log(message);
});

consumer.on('error', function(error) {
    console.log(error);
})