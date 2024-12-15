import nodemailer from "nodemailer";

export default async function sendMail({ to, from, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "75053e001@smtp-brevo.com",
      pass: "IDUWjdrX2EY3gAyR"
    }
  });

  try {
    let info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html
    });

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}
