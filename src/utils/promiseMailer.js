import nodemailer from 'nodemailer';

const promiseMailer = (mailOptions) => new Promise((resolve, reject) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD
    }
  });

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err); // eslint-disable-line no-console
      reject(err);
    } else {
      console.log(info); // eslint-disable-line no-console
      resolve();
    }
  });
});

module.exports = promiseMailer;
