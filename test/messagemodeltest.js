/*
 body:     null,
 template: null,
 format:   'text'
 */
var assert = require('assert');
var messageModel = require('../app/models/messages/messagemodel');

describe('Message model initialisation', function () {

    it('The model should contain the following keys [\'body\', \'template\', \'format\', \'tokens\']', function () {
        assert.deepEqual(
            [ 'body', 'template', 'format', 'tokens' ],
            Object.keys(messageModel)
        );
    });

    it('The body key must be null', function () {
        assert.equal(null, messageModel.body);
    });

    it('The template key must be null', function () {
        assert.equal(null, messageModel.template);
    });

    it('The format key must be the string "text"', function () {
        assert.equal('text', messageModel.format);
    });

    it('The tokens key must be null', function () {
        assert.equal(null, messageModel.tokens);
    });
});