var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;

router.get('/', function(req, res, next) {
var client = new kafka.Client('localhost:2181');
    var payloads = [{
        topic: 't12',
        messages: 'createTopic'
        // messages: 'createTopic',
        // partition: 0
    }];
    var producer = new Producer(client);
	producer.on('ready',function(){
	producer.createTopics(['t12'], true, function (err, data) {
		
		console.log(err);
		console.log(data);
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

