/*jslint node: true */
'use strict';

function MessageModel (body, template, format, tokens) {
    this.body = body || null,
    this.template = template || null,
    this.format = format || 'text',
    this.tokens = tokens ||  null
}


MessageModel.prototype = {
    body: null,
    template: null,
    format: 'text',
    tokens: null,

    constructor: MessageModel,

    setBody: function (body) {
        this.body = body;
    },

    getBody: function () {
        return this.body;
    },

    setTemplate: function (template) {
        this.template = template;
    },

    getTemplate: function () {
        return this.template;
    },

    setFormat: function (format) {
        this.format = format;
    },

    getFormat: function () {
        return this.format;
    },

    setTokens: function (tokens) {
        this.tokens = tokens;
    },

    getTokens: function () {
        return this.tokens;
    }
};

module.exports = MessageModel;
