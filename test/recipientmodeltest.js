/*jslint node: true */
'use strict';

var assert = require('assert');
var model = new (require('../app/models/messages/recipientmodel'))();

describe('Recipient model initialisation', function () {

    it('The model should contain the following keys [\'recipientName\', \'recipientEmail\']', function () {
        assert.deepEqual(
            [ 'recipientName', 'recipientEmail'],
            Object.keys(model)
        );
    });

    it('The recipientName key must be null', function () {
        assert.equal(null, model.recipientName);
    });

    it('The recipientEmail key must be null', function () {
        assert.equal(null, model.recipientEmail);
    });

});