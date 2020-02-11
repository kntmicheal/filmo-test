const sgMail = require('@sendgrid/mail');
sgmail.setApikey('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')
    //sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'knt.mickeal@gmail.com', //receiver's email
    from: 'knt.mickeal@gmail.com', //sender's email
    subject: 'I think its working', //Subject
    text: 'and finally  i can send email from sendgrid', //content
    html: 'and easy to do anywhere, een with Node.js', //HTML content
};
sgMail.send(msg);