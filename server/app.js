var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// db
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/widget_data');

var routes = require('./routes/index')

var app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// db middleware
app.use(function(req, res, next){
	req.db = db;
	next();
});

// all routes
app.use('/', routes);


module.exports = app;