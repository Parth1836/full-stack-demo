const express = require("express");
var nodemailer = require('nodemailer');

const router = express.Router();
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'parth.vaishnani36@gmail.com',
    pass: 'aoveaihtooyzccyn'
  }
});

var mailOptions = {
  from: 'parth.vaishnani36@gmail.com',
  to: 'kamanivibhuti4@gmail.com',
  subject: 'Sending Email using Node.js',
  html: 'That was easy!'
};
router.post("/send-mail",(req, res) => {
    console.log("mail api req", req)
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(500).send({
            status: "error",
            message: error,
          });
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send({
            status: "success",
            message: "Email Sent",
            data: info.response,
          });
        }
      });
})

module.exports = router;
