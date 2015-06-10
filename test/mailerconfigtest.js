var assert = require('assert');
var mailerConfig = require('../config/mailerconfig');

describe('MailerConfig loading tests', function () {
    it('Should contain 2 service entries if loaded correctly', function () {
        assert.equal(2, Object.keys(mailerConfig.services).length);

    });

    it('The first key should be called gmail', function () {
        assert.equal('gmail', Object.keys(mailerConfig.services)[0]);
    });

    it('The first key should contain the following keys [\'service\', \'transportType\', \'user\', \'secret\']', function () {
        assert.deepEqual(
            [ 'service', 'transportType', 'user', 'secret' ],
            Object.keys(mailerConfig.services[Object.keys(mailerConfig.services)[0]])
        );
    });
});

