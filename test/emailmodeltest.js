var assert = require('assert');
var model = require('../app/models/messages/emailmodel');

describe('Email model initialisation', function () {

    it('The model should contain the following keys [\'recipients\', \'sender\', \'message\']', function () {
        assert.deepEqual(
            [ 'recipients', 'sender', 'message' ],
            Object.keys(model)
        );
    });

    it('The reciepients key must be an empty array', function () {
        assert.equal('[object Array]', Object.prototype.toString.call(model.recipients));
        assert.equal(0, model.recipients.length);
    });

    it('The sender key must be an empty array', function () {
        assert.equal('[object Array]', Object.prototype.toString.call(model.sender));
        assert.equal(0, model.sender.length);
    });

    it('The message key must null', function () {
        assert.equal(null, model.message);
    });
});