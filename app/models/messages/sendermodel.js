/*jslint node: true */
'use strict';

function SenderModel(senderName, senderEmail, replyToEmail) {
    this.senderName = senderName || null;
    this.senderEmail = senderEmail || null;
    this.replyToEmail = replyToEmail || null;
}

SenderModel.prototype = {
    senderName:   null,
    senderEmail:  null,
    replyToEmail: null,

    constructor: SenderModel,

    getSenderName: function () {
        return this.senderName;
    },

    setSenderName: function (senderName) {
        this.senderName = senderName;
    },

    getFullSenderName: function () {
        if (this.senderEmail.length && this.senderName.length) {
            return this.senderName + '<' + this.senderEmail + '>';
        }

        return '';
    },

    getSenderEmail: function () {
        return this.senderEmail;
    },

    setSenderEmail: function (senderEmail) {
        this.senderEmail = senderEmail;
    },

    getReplyToEmail: function () {
        return this.replyToEmail;
    },

    setReplyToEmail: function (replyToEmail) {
        this.replyToEmail = replyToEmail;
    }
}

module.exports = SenderModel;
