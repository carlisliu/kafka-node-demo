/*In an effort to make the API simpler you no longer need to create a client this is done inside the ConsumerGroup
consumer ID do not need to be defined. There's a new ID to represent consumers called member ID and this is assigned to consumer after joining the group
 */
var kafka = require('kafka-node');
var ConsumerGroup = kafka.ConsumerGroup;
var options = {
	host: 'zookeeper:2181',
	groupId: 'test-consumer-group',
	protocol: ['roundrobin'],
	migrateHLC: false,
	migrateRolling: true
};
var topicPartition = {
	"RebalanceTopic": [
		"0",
		"1",
		"2"
	],
	"RebalanceTest": [
		"0",
		"1",
		"2"
	]
};

var groupMembers = [{
		"subscription": [
			"RebalanceTopic",
			"RebalanceTest"
		],
		"version": 0,
		"id": "consumer1-8db1b117-61c6-4f91-867d-20ccd1ad8b3d"
	}, {
		"subscription": [
			"RebalanceTopic",
			"RebalanceTest"
		],
		"version": 0,
		"id": "consumer3-bf2d11f4-1c73-4a39-b498-cfe76eb65bea"
	}, {
		"subscription": [
			"RebalanceTopic",
			"RebalanceTest"
		],
		"version": 0,
		"id": "consumer2-9781058e-fad4-40e8-a69c-69afbae05184"
	}
];

var consumerGroup = new ConsumerGroup(options, 'topic1');

consumerGroup.assign(topicPartition, groupMembers, function (err, result) {

	console.log(result);

});

// function :: assign (topicPartition, groupMembers, callback)


// module.exports=router;