var express = require('express');
var router = express.Router();

// all routing logic is here


router.get('/set1', function (req, res){
	var db = req.db;
	var collection = db.get('widgets');
	collection.find({}, {}, function(e, docs){
		res.json(docs);
	});
});



module.exports = router;
