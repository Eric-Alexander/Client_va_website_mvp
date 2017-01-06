// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// optional require body-parser (to receive post data from clients)

var path = require('path');
// Setting Static Folder Directory
app.use(express.static(path.join(__dirname, './client')));
// Setting View Engine set to html
app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// Routes
// Root Request
app.get('/', function(req, res) {

    res.render('index');
});
app.get('/home', function(req, res) {

    res.redirect('index.html');
});
app.get('/guests', function(req, res) {

    res.redirect('guests.html');
});
// Setting Server to Listen on Port: 8000
app.listen(3000, function() {
    console.log("listening on port 3000");
});
