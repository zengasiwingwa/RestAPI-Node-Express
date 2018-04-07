var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get(function(res, req) {
	req.send('Welcome to my API');
});

app.listen(port, function(){
	console.log('Running on port: ' + port);
});