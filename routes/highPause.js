var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var fs = require('fs');
var path = require('path');
//指定读取内容的编码格式
var message = fs.readFileSync(path.resolve(__dirname,'./test.txt'),'utf8');
// console.log(message);
// console.log(__dirname);
//查看全局变量
// console.log(process);

router.get('/', function (req, res, next) {
	var client = new kafka.Client('10.194.1.2:2181');
	var producer = new Producer(client);
	// attributes controls compression of the message set. It supports the following values:
	// 0: No compression
	// 1: Compress using GZip
	// 2: Compress using snappy
	// var message = 
	
	var payloads = [{
			topic: "topic1",
			messages: message,
			partition: 0,
			attributes: 0
		}
	]
	
	producer.on('ready', function () {
		producer.send(payloads, function (err, data) {
			console.log(message);
			console.log(data);
			res.render('index', {
				title: "pause test"
			})
		});
	});
});
module.exports = router;
