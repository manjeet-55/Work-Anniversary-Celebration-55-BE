const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const UserService = require("./UserService");
const { tokenSecret } = require("../config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "shreytank45@gmail.com",
    pass: "Home@284",
  },
});

const sendBirthdayEmails = async () => {
  try {
    const users = await UserService.getUsersWithBirthdayToday();

    users.forEach((user) => {
      const magicLink = generateMagicLink(user);
      sendEmail(user.email, magicLink);
    });
  } catch (error) {
    console.error("Error sending birthday emails:", error);
  }
};

const generateMagicLink = (user) => {
  const payload = {
    userId: user.id,
    email: user.email,
    // Add any other user data you want to include in the token
  };
  const token = jwt.sign(payload, tokenSecret, { expiresIn: "1h" });
  const magicLink = `https://localhost:5173//verify-email?token=${token}`;
  return magicLink;
};

const sendEmail = (email, magicLink) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Happy Birthday!",
    html: `<p>Dear User,</p><p>Wishing you a very happy birthday!</p><p>Click <a href="${magicLink}">here</a> to claim your special gift!</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = { sendBirthdayEmails };
