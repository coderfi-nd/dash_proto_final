var express = require('express');
var router = express.Router();

// all routing logic is here

// get widgets of set1
router.get('/set1', function (req, res){
	var db = req.db;
	var collection = db.get('widgets');
	collection.find({}, {}, function(e, docs){
		res.json(docs);
	});
});

// get lci data
router.get('/lci', function(req, res) {
	// insert lci data first
	var db = req.db;
	var collection = db.get('lci');
	var sendable = req.sendable;

	collection.insert(sendable, function(err, doc) {
		if(err) throw err;
	});

	// send lci data
	collection.find({}, {}, function(e, docs) {
		res.json(docs);
	});

});

module.exports = router;
