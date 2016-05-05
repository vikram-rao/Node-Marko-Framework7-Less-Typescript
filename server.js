//Marko code for serverside processing
require('marko/node-require').install();
var lasso = require('lasso');
lasso.configure("lasso.json");

var serveStatic = require("serve-static");

//Express to server the above processed output
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/', require('./src/pages/home/index'));
app.listen(port, function() {
    console.log("Listening on port "+port);
});

app.use(serveStatic(__dirname + '/build/static'));
