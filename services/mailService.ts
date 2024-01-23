var nodemailer = require("nodemailer");

export async function sendMail(subject: string, messageText: string) {

  const emailRecipient = 'jpinchak@gmail.com'
  
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.MY_EMAIL,
    to: emailRecipient,
    subject: subject,
    text: messageText,
  };

  transporter.sendMail(mailOptions, function (error: string, info: string) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}