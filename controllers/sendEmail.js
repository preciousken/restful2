const nodemailer = require('nodemailer')

const sendEmail = (req,res,next)=>{
    
const {email} = req.body

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

const mailOptions = {
  from: 'staunchngdev@gmail.com',
  to: `${email}`,
  subject: 'Successfully purchased from kinkycoilygirls',
  text: `Hi Dear ${email}, your purchase of ........ was successful
  you are welcome again LOL`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
 res.status(500).send(error)
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
    res.status(200).send('Kindly check your email box, THANKS!')
  }
});

}



module.exports = {sendEmail}