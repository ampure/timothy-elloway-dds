import nodemailer from 'nodemailer';
// import sgTransport from 'nodemailer-sendgrid-transport';

// const transporter = {
//     auth: {
//         // Use SendGrid API key
//         api_key: '###',
//     },
// };

// const mailer = nodemailer.createTransport(sgTransport(transporter));
const mailer = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.GMAIL_ACCOUNT, 
        pass: process.env.GMAIL_APP_PASS 
    }
  });

export default async (req, res) => {
    // console.log(req.body);
    const { name, email, number, subject, text } = req.body;

    const data = {
        to: process.env.SEND_EMAIL_TO,
        from: email,
        subject: subject ? subject : 'Contact form from website',
        text: `
            From: ${name} \n
            Number: ${number} \n
            Subject: ${subject} \n
            Message: ${text} 
        `,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
    };

    try {
        const response = await mailer.sendMail(data);
        console.log(response);
        res.status(200).send('Email send successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error proccessing charge');
    }
};
