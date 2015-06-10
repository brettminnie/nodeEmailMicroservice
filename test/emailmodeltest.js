var assert = require('assert');
var emailModel = require('../app/models/emailmodel');

describe('Email model initialisation', function () {

    it('The model should contain the following keys [\'recipients\', \'sender\', \'message\']', function () {
        assert.deepEqual(
            [ 'recipients', 'sender', 'message' ],
            Object.keys(emailModel)
        );
    });

    it('The reciepients key must be an empty array', function () {
        assert.equal('[object Array]', Object.prototype.toString.call(emailModel.recipients));
        assert.equal(0, emailModel.recipients.length);
    });

    it('The sender key must be an empty array', function () {
        assert.equal('[object Array]', Object.prototype.toString.call(emailModel.sender));
        assert.equal(0, emailModel.sender.length);
    });

    it('The message key must null', function () {
        assert.equal(null, emailModel.message);
    });
});