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

    getReciepientEmail: function () {
        return this.recipientEmail;
    }
};

module.exports = RecipientModel;