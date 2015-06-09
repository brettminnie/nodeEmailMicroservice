var express       = require('express');
var app           = express();
var port          = process.env.PORT || 8080;
var morgan        = require('morgan');
var bodyParser    = require('body-parser');
var mailerService = require('./app/mailerservice');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// launch ======================================================================
app.listen(port);
console.log('Email Micro Server running and listening on port ' + port);