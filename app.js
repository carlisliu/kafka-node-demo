var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var kafka1 = require('./routes/kafka');
var kafka2 = require('./routes/createTopic');
var kafka3 = require('./routes/createTopicAsync');
var kafka4 = require('./routes/highLevelP');
var kafka5 = require('./routes/highCreateTopic');
var kafka6 = require('./routes/highCreateTopicAsync');
var kafka7 = require('./routes/addTopic');
var kafka8 = require('./routes/removeTopic');
var kafka9 = require('./routes/offsetTopic');
var kafka10 = require('./routes/pause');
var kafka11 = require('./routes/resume');
var kafka12 = require('./routes/resumeTopics');
var kafka13 = require('./routes/highLevelC');
var kafka14 = require('./routes/highAddTopic');
var kafka15 = require('./routes/highRemoveTopic');
var kafka16 = require('./routes/highOffsetTopic');
var kafka17 = require('./routes/highPause');
var kafka18 = require('./routes/highRemove');
var kafka19 = require('./routes/consumerGroup');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/kafka', require('./routes/kafka'));

app.use('/kafka1',kafka1);
app.use('/createTopic',kafka2);
app.use('/createTopicAsync',kafka3);
app.use('/highLevelP',kafka4);
app.use('/highCreateTopic',kafka5);
app.use('/highCreateTopicAsync',kafka6);
app.use('/addTopic',kafka7);
app.use('/removeTopic',kafka8);
app.use('/offsetTopic',kafka9);
app.use('/pause',kafka10);
app.use('/resume',kafka11);
app.use('/resumeTopics',kafka12);
app.use('/highLevelC',kafka13);
app.use('/highAddTopic',kafka14);
app.use('/highRemoveTopic',kafka15);
app.use('/highOffsetTopic',kafka16);
app.use('/highPause',kafka17);
app.use('/highRemove',kafka18);
app.use('/consumerGroup',kafka19);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;