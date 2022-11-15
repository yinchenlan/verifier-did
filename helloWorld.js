var express = require('express');
var app = express();
var http = require('http');

app.use(express.static('public'));
app.use('.well-known', express.static(__dirname + '/.well-known'));

var server = app.listen(process.env.PORT || 5000);
