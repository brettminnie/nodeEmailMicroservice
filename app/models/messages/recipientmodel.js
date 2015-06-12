/*jslint node: true */
'use strict';

function RecipientModel(recipientName, recipientEmail) {
    this.recipientName = recipientName || null;
    this.recipientEmail = recipientEmail || null;
}

RecipientModel.prototype = {
    recipientName: null,
    recipientEmail: null,

    constructor: RecipientModel,

    setRecipientName: function (recipientName) {
        this.recipientName = recipientName;
    },

    getRecipientName: function () {
        return this.recipientName;
    },

    setRecipientEmail: function (recipientEmail) {
        this.recipientEmail = recipientEmail;
    },

    getRecipientEmail: function () {
        return this.recipientEmail;
    },

    getFullRecipientName: function () {
        if (
            null !== this.recipientEmail && this.recipientEmail.length &&
                null !== this.recipientName && this.recipientName.length
        ) {
            return this.recipientName + '<' + this.recipientEmail + '>';
        }
    }
};

module.exports = RecipientModel;