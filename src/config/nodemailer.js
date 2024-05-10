// src/config/mailer.js
// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});

export default transporter
