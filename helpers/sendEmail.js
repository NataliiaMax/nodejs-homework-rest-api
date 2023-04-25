const nodemailer = require("nodemailer");

require("dotenv").config();

const { PASSWORD, EMAIL_FROM } = process.env;
const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_FROM };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEmail;
