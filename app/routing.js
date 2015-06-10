/*jslint node: true */
'use strict';
var express = require('express');

module.exports = function(app) {

    var router = express.Router();

    app.post('/', function (result, request) {
        console.log('hit this');
        return null;
    });

    app.use('/', router);
}