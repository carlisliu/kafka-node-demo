var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
router.get('/', function(req, res, next) {
var client = new kafka.Client('10.194.1.2:2181');
    var producer = new HighLevelProducer(client);
    var km = new kafka.KeyedMessage('key', 'message')
    var payloads = [{
        topic: 'topic-test',
        messages: 'high',
        partition: 1
    }];
    producer.on('ready', function() {
        producer.send(payloads, function(err, data) {
            console.log(data);
            res.render('index', {
                title: 'Express Kafka'
            });
        });
    });
});

module.exports = router;