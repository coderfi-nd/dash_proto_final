// BASE SETUP
// ===================================================================================


// call needed packages

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use body-parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set the port 
var port = process.env.PORT || 8100;

// API ROUTES
// ===================================================================================

// get instace of express router
var router = express.Router();

router.get('/', function(req, res) {
	res.json({message: 'hooray! welcome to our api'});

});

// root url is /api
app.use('/api', router);

// START SERVER
// ===================================================================================
app.listen(port);
console.log("Listening on port " + port);

