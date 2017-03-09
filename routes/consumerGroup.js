/*In an effort to make the API simpler you no longer need to create a client this is done inside the ConsumerGroup
consumer ID do not need to be defined. There's a new ID to represent consumers called member ID and this is assigned to consumer after joining the group
*/
var express = require('express');
var kafka = require('kafka-node');
var ConsumerGroup = kafka.ConsumerGroup;
var router = express.Router();
router.get('/', function(req, res, next) {
    var options = {
        host: 'zookeeper:2181',
        groupId: 'test-consumer-group',
        protocol: ['test', 0, {}, function() {
            console.log(arguments)
        }],
        migrateHLC: false,
        migrateRolling: true
    };

    // var consumerGroup = new ConsumerGroup(options, ['RebalanceTopic', 'RebalanceTest']);
    var consumerGroup = new ConsumerGroup(options, 'topic1');


    consumerGroup.on('message', function(message) {
        console.log(message);
    });



});



// function :: assign (topicPartition, groupMembers, callback)



module.exports = router;