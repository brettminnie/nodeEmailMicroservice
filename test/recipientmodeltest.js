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

    it('I can retrieve the recipientName with getRecipientName', function () {
        assert.equal(null, model.setRecipientName());
    });

    it('I can set the recipientName with setRecipientName and retrieve the value with getRecipientName', function () {
        var expected = 'Test Recipient';
        model.setRecipientName(expected);
        assert.equal(expected, model.getRecipientName());
    });

    it('I can retrieve the recipientEmail with getRecipientEmail', function () {
        assert.equal(null, model.getRecipientEmail());
    });

    it('I can set the recipientEmail with setRecipientEmail and retrieve the value with getRecipientEmail', function () {
        var expected = 'recipient@domain.tld';
        model.setRecipientEmail(expected);
        assert.equal(expected, model.getRecipientEmail());
    });

    it('I can set the recipient name and email and retrieve a concatenated form with getFullRecipientName', function () {
        var expectedRecipient = 'Test Recipient';
        var expectedEmail = 'recipient@domain.tld';
        model.setRecipientEmail(expectedEmail);
        assert.equal(expectedEmail, model.getRecipientEmail());
        model.setRecipientName(expectedRecipient);
        assert.equal(expectedRecipient, model.getRecipientName());

        var expectedConcat = expectedRecipient + '<' + expectedEmail + '>';
        assert.equal(expectedConcat, model.getFullRecipientName());
        assert.equal(expectedConcat, model.getFullRecipientName());
    });

});