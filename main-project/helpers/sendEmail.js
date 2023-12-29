const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const { SENDFRID_API_KEY } = process.env;

sgMail.setApiKey(SENDFRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "sanyaczurkan2000@gmaul.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
