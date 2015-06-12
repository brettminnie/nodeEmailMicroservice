/*
 body:     null,
 template: null,
 format:   'text'
 */
var assert = require('assert');
var model = new (require('../app/models/messages/messagemodel'))();

describe('Message model initialisation', function () {

    it('The model should contain the following keys [\'body\', \'template\', \'format\', \'tokens\']', function () {
        assert.deepEqual(
            [ 'body', 'template', 'format', 'tokens' ],
            Object.keys(model)
        );
    });

    it('The body key must be null', function () {
        assert.equal(null, model.body);
    });

    it('The template key must be null', function () {
        assert.equal(null, model.template);
    });

    it('The format key must be the string "text"', function () {
        assert.equal('text', model.format);
    });

    it('The tokens key must be null', function () {
        assert.equal(null, model.tokens);
    });
});
