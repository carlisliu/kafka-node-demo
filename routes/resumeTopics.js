var express = require('express');
var kafka = require('kafka-node');
var router = express.Router();
var Producer = kafka.Producer;
router.get('/',function(req, res, next){

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
});

module.exports=router;
