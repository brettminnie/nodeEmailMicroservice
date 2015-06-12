/*jslint node: true */
'use strict';

var assert = require('assert');
var model = new (require('../app/models/messages/sendermodel'))();

describe('Sender model initialisation', function () {

    it('The model should contain the following keys [\'senderName\', \'senderEmail\', \'replyToEmail\']', function () {
        assert.deepEqual(
            [ 'senderName', 'senderEmail', 'replyToEmail'],
            Object.keys(model)
        );
    });

    it('The senderName key must be null', function () {
        assert.equal(null, model.senderName);
    });

    it('The senderEmail key must be null', function () {
        assert.equal(null, model.senderEmail);
    });

    it('The replyToEmail key must be null', function () {
        assert.equal(null, model.replyToEmail);
    });

    it('I can retrieve the senderName with getSenderName', function () {
        assert.equal(null, model.getSenderName());
    });

    it('I can retrieve the senderEmail with getSenderEmail', function () {
        assert.equal(null, model.getSenderEmail());
    });

    it('I can retrieve the replyToEmail with getReplyToEmail', function () {
        assert.equal(null, model.getReplyToEmail());
    });

    it('I can set the senderName with setSenderName and retrieve the value with getSenderName', function () {
        var expected = 'Test Sender';
        model.setSenderName(expected);
        assert.equal(expected, model.getSenderName());
    });

    it('I can set the senderName with setSenderEmail and retrieve the value with getSenderEmail', function () {
        var expected = 'test.sender@domain.tld';
        model.setSenderEmail(expected);
        assert.equal(expected, model.getSenderEmail());
    });

    it('I can set the replyToEmail with setReplyToEmail and retrieve the value with getReplyToEmail', function () {
        var expected = 'reply.to@domain.tld';
        model.setReplyToEmail(expected);
        assert.equal(expected, model.getReplyToEmail());
    });

    it('I can set the senderName and email and retrieve a contactenated form with getFullSenderName', function () {
        var expectedSender = 'Test Sender';
        var expectedEmail = 'test.sender@domain.tld';
        model.setSenderEmail(expectedEmail);
        assert.equal(expectedEmail, model.getSenderEmail());
        model.setSenderName(expectedSender);
        assert.equal(expectedSender, model.getSenderName());

        var expectedConcat = expectedSender + '<' + expectedEmail + '>';
        assert.equal(expectedConcat, model.getFullSenderName());
    });
});