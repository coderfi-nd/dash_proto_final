var request = require('supertest');
var app = require('./../app');

describe('Requests to the root path', function(){

 it('Returns a 200 status code', function(done) {
			request(app)
			.get('/#/')
			.expect(200, done);
	})
	
 it('Returns an HTML format', function (done) {
 			request(app)
 			.get('/#/')
 			.expect('Content-Type', /html/, done);

 })

 it('Returns a file with string home', function(done) {
 		request(app)
 		.get('/#/')
 		.expect(/home/i, done);
 })

});

describe('Set 1 List widgets', function () {
 	it('Returns 200 status code', function(done) {

 		request(app)
 		.get('/set1')
 		.expect(200, done);

 	});

 	it('Returns JSON format', function(done) {
 		request(app)
 		.get('/set1')
 		.expect('Content-Type', /json/, done);

 	});

 	it('Returns initial widgets', function (done) {
 		request(app)
 		.get('/set1')
 		.expect(JSON.stringify(['1', '2', '3']), done);

 	});


});



