/**
 var senderModel = {
    senderName:   null,
    senderEmail:  null,
    replyToEmail: null
};

 module.exports = senderModel;
 **/

var assert = require('assert');
var model = require('../app/models/sendermodel');

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

});