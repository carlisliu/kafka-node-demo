var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;
//var client = new kafka.Client('10.194.1.2:9092');
//client.on('error', function(error){console.log(error);})
//var client = new kafka.Client('localhost:9092');
router.get('/', function(req, res, next) {
var client = new kafka.Client('10.194.1.2:2181');
    var producer = new Producer(client);
    var km = new kafka.KeyedMessage('key', 'message');
    var payloads = [{
        topic: 'topic1',
        messages: 'hi',
        partition: 0
    }];
    producer.on('ready', function() {
        producer.send(payloads, function(err, data) {
            console.log(data);
            res.render('index', {
                title: 'Express Kafka'
            });
        });
    });
   // producer.on('error', function(error) { console.log(error);});
});

module.exports = router;
