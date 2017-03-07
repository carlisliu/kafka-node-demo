var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
//var client = new kafka.Client('10.194.1.2:9092');
//client.on('error', function(error){console.log(error);})
//var client = new kafka.Client('localhost:9092');
router.get('/', function(req, res, next) {
var client = new kafka.Client('localhost:2181');
    var producer = new HighLevelProducer(client);
    var km = new kafka.KeyedMessage('key', 'message')
    var payloads = [{
        topic: 't5',
        messages: 'high',
        partition: 0
    }, {
        topic: 't6',
        messages: ['hello', 'world', km]
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
