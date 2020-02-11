const SGmail = require('@sendgrid/mail')

//SGmail.setApikey('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') // Input Api key or add to environment config
SGMail.setApiKey(process.env.SENDGRID_API_KEY);

function newUserEmail(email, name) {
    const message = {
        to: email, //email variable
        from: { email: 'your email', name: 'Name of user you want to  send email as' },
        message: `Hi there, ${name}`,
        subject: "This is a test Email"
    }
    SGmail.send(message)
}

module.exports = {
    newUserEmail
}