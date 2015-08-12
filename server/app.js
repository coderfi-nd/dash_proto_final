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


function csvToJSON(csv){
	var lines = csv.split("\n");
	var result = [];
	var headers = lines[0].split(",");
	for (var i = 1; i < lines.length; i++)
	{
		var obj = {};
		var currentline = lines[i].split(",");

		for (var j=0; j < headers.length; j++)
		{
			obj[headers[j]] = currentline[j];
		}

		result.push(obj);

	}

	return JSON.stringify(result);


}
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
				sendable[file.split('.')[0]] = csvToJSON(data);
				if(0 ===-- c){

					// store data in the variable and go to next middleware
					req.sendable = sendable;
					next();
				}

			});
		});
	});
	
});

// save obtained files to lci collection
app.use(function(req, res, next) {

	var db = req.db;
	var sendable = req.sendable;
	var lci_collection = db.get('lci');
	lci_collection.insert(sendable, function(err, doc) {
		if(err) throw err;
		next();
	});

});

// all routes
app.use('/', routes);


module.exports = app;