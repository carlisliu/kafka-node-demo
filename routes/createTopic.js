var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;

router.get('/', function(req, res, next) {
    var client = new kafka.Client('10.194.1.2:2181');
    var payloads = [{
        topic: 't1',
        messages: 'createTopic',
        partition: 0
    }];
    var producer = new Producer(client);

    // create topic sync
    // asnyc is set to false , this method does not return until all topics are created
    producer.createTopics(['t', 't1'], false, function(err, data) {
        producer.on('ready', function() {
            producer.send(payloads, function(err, data) {
                console.log(data);
                res.render('index', {
                    title: 'Express Kafka'
                });
            });
        });
    });
});

module.exports = router;