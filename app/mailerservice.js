/*jslint node: true */
'use strict';

var mailerConfig = require('../config/mailerconfig');
var nodeMailer   = require('nodemailer');

var mailerService = {
    mailServices: [],

    init : function () {
        this.initMailers();

        return this;
    },

    getMailers : function () {
        if (0 === this.mailServices.length) {
            this.initMailers();
        }

        return this.mailServices;
    },

    initMailers: function () {
        var serviceName = null,
            rootNode = mailerConfig.services;

        for (serviceName in rootNode) {
            this.mailServices[serviceName] = nodeMailer.createTransport(rootNode[serviceName].transportType, {
                service: serviceName,
                auth   : {
                    user: rootNode[serviceName].user,
                    pass: rootNode[serviceName].secret
                }
            });
        }
    }/*,

    send: function() {

    }*/
};

module.exports = mailerService.init();
