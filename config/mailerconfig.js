var mailerConfig = {
    services : {
        gmail : {
            service: 'Gmail',
            transportType: 'SMTP',
            user: 'brett.minnie@gmail.com',
            secret: 'vvjpgqyrmdwdgzck'
        },
        smtp : {
            transportType: 'SMTP',
            host: 'host.mailserver.com',
            port: '25',
            user: 'username',
            secret: 'password'
        }
    }
};

module.exports = mailerConfig;