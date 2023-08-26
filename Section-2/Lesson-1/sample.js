var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass:''

    
  }
});

function sendEmail(){
  var mailOptions = {
  from: 'harshdivate45@gmail.com',
  to: 'zentalc741@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
}};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});