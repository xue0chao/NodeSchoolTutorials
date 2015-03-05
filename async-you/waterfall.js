var http = require('http');
var fs = require('fs');
var async = require('async');
var filePath = process.argv[2];

async.waterfall([
	function(callback) {
		fs.readFile(filePath, 'utf-8', function(err, content){
			if (err) callback(err);
			callback(null, content);
		});
	},
	function(url, callback) {
		var body = '';
		http.get(url, function(response){
			response.on('data', function(chunk){
				body += chunk.toString();
			});
			response.on('end', function(){
				callback(null, body);
			})
		}).on('error', function(err){
			callback(err);
		});
	}
], function(err, response){
	if (err) throw err;
	console.log(response);
});