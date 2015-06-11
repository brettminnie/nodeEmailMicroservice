/*jslint node: true */
'use strict';

function EmailModel(recipents, sender, message) {
    this.recipients = recipents || [];
    this.sender =  sender || null;
    this.message = message || null;
}

EmailModel.prototype = {
    recipients: [],
    sender: null,
    message: null,

    constructor: EmailModel,

    /**
     * Push a recipient onto our list
     * @param recipientModel recipient
     */
    addRecipient: function (recipient) {
        this.recipients.push(recipient);
    },

    /**
     * Return a list of our recipients
     * @returns {Array}
     */
    getRecipients: function () {
        return this.recipients;
    },

    /**
     * Set the sender
     * @param sender
     */
    setSender: function (sender) {
        this.sender = sender;
    },

    /**
     * @returns {SenderModel|null}
     */
    getSender: function () {
        return this.sender;
    },

    /**
     * @param message
     */
    setMessage: function (message) {
        this.message = message;
    },

    /**
     * @returns {MessageModel|null}
     */
    getMessage: function () {
        return this.message;
    }
};

module.exports = EmailModel;

