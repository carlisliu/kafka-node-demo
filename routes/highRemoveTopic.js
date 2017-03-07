var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;

router.get('/',function(req, res, next){
	var client = new kafka.Client('10.194.1.2:2181');
	var producer = new Producer(client);
	var payloads = [{
		topic : "t5",
		messages : "hello",
		partition : 0	
	}]
	producer.on('ready',function(){
		producer.send(payloads,function(err,data){
			console.log(data);
			res.render('index',{
			title: "kafka demo"
			});
		});
	});
});

module.exports=router;