var express = require('express');
var kafka = require('kafka-node');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var Producer = kafka.Producer;
var message = fs.readFileSync(path.resolve(__dirname, './test.txt'), 'utf8');
console.log(message);
router.get('/', function (req, res, next) {
	var client = new kafka.Client('10.194.1.2:2181');
	var producer = new Producer(client);
	var payloads = [{
			topic: "topic1",
			messages: message,
			partition: 0
		}
	];
	producer.on('ready', function () {
		producer.send(payloads, function (err, data) {
			console.log(typeof(data));
			console.log(data);
			res.render('index', {
				title: " kafka resume test"
			});
		});
	});
});
module.exports = router;