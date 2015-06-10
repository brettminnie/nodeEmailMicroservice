var express       = require('express');
var app           = express();
var port          = process.env.PORT || 8080;
var morgan        = require('morgan');
var bodyParser    = require('body-parser');
var mailerService = require('./app/mailerservice');

require('./app/routing')(app);

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// launch ======================================================================
app.listen(port);
console.log('Email Micro Server running and listening on port ' + port);

var mailOptions = {
    from: "brett.minnie@gmail.com", // sender address
    to: "brett.minnie@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔" // plaintext body
}

var mailer = mailerService.getMailers().gmail;

mailer.sendMail(mailOptions, function(error, response) {
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
});