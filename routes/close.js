var express = require('express');
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var router = express.Router();

router.get('/',function(req, res, next){
	var client = kafka.Client('10.194.1.2:2181');
	var producer = new Producer(client);
	var km = kafka.KeyedMessage('key','message');
	var payloads = [{
		topic: 'topic1',
        messages: 'hi',
        partition: 0
	}];
	producer.on('ready',function(){
		producer.send(payloads,function(err,data){
			
			console.log(data);
			res.render('index',{
				
				title:'kafka demo'
			});			
		});
	});
});

module.exports=router;
