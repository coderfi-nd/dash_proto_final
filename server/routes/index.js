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
	


router.post('/set1', function(req, res) {
 var db = req.db;

 

});
// get lci data
router.get('/lci', function(req, res) {
	// insert lci data first
	var db = req.db;
	var collection = db.get('lci');
	var sendable = req.sendable;

	collection.find({}, {}, function(err, docs) {

		if(docs == null)
		{
			collection.insert(sendable, function(err, docs){
				if(err) throw err;

			});
		}

		res.json(docs);

	});

});

module.exports = router;
