var express = require('express');
var kafka = require('kafka-node');
var router = express.Router();
var Producer = kafka.Producer;
// var client = kafka.Client('10.194.1.2:2181');

router.get('/',function(req, res, next){
	// var cli
	// var producer = new Producer()
	var client = kafka.Client('10.194.1.2:2181');
	var producer = new Producer(client);
	var payloads = [{
		
	topic: 'topic1',
	messages:'hello world', // multi messages should be a array, single message can be just a string,
	// key: 'theKey', // only needed when using keyed partitioner
	// attributes: 1,
	partition: 0
	}];
	
	producer.on('ready',function(){
		producer.send(payloads,function(err,data){
			console.log(data);
			res.render('index',{
				title: 'kafka demo'
			});	
		});
	});
	
});

module.exports = router;