/*jslint node: true */
'use strict';

var assert = require('assert');
var model = new (require('../app/models/messages/emailmodel'))();

describe('Email model initialisation', function() {

    it('The model should contain the following keys [\'recipients\', \'sender\', \'message\']', function () {
        console.log(Object.keys(model));
        assert.deepEqual(
            [ 'recipients', 'sender', 'message' ],
            Object.keys(model)
        );
    });

    it('The reciepients key must be an empty array', function () {
        assert.equal('[object Array]', Object.prototype.toString.call(model.recipients));
        assert.equal(0, model.recipients.length);
    });

    it('The sender key must be null', function () {
        assert.equal(null, model.sender);
    });

    it('The message key must null', function () {
        assert.equal(null, model.message);
    });

});
