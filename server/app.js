var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var fs = require('fs');
var dir = './stream/';
var sendable = {};

// db
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/widget_data');

var routes = require('./routes/index')

var app = express();

// parser and template middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// db middleware
app.use(function(req, res, next){
	req.db = db;
	next();
});

// streaming middleware
app.use(function(req, res, next) {

	
	fs.readdir(path.join(__dirname, dir), function(err, files){
		if(err) throw err;
		var c = 0;
		files.forEach(function(file){

			c++;
			fs.readFile(path.join(__dirname, dir) + file, 'utf-8', function(err, data)
			{
				if(err) throw err;
				sendable[file] = data;
				if(0 ===-- c){

					console.log(sendable);
				}

			});
		});
	});
	next();
});

// all routes
app.use('/', routes);


module.exports = app;