var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// var EmailTemplate = require('email-templates').EmailTemplate;

/* GET users listing. */

router.get('/',(req,res)=>{
  console.log("hellp world");
  res.send("hello");
})
router.post('/ContactForm',(req,res)=>{
  let fromEmail =req.body.userEmail;
  let {userName,lastName,userph,userEmail} = req.body;
  let mailSubject = req.body.mailSubject;
  let mailContent = req.body.mailContent;
  console.log(fromEmail);
  console.log(userName);
  console.log(mailSubject);
  console.log(mailContent);
    

  let transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:'587',
    secure:false,
    auth : {
      user: 'gudipatiabhilashreddy@gmail.com',
      pass : 'abhilash877'
    },tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  }
  });
  let mailOptions={
    from : fromEmail,
    to : 'gudipatiabhilashreddy@gmail.com',
    subject : mailSubject,
    html : `<p>Hi Makerspad This is <span><b>${userName} ${lastName}</b></span></p><br>
    <p><b>Email :   </b>${userEmail}</p><br>
    <p><b>Phone Number :</b>${userph}</p><br>
    <p><b>Message :</b>${mailContent}</p><br>
    <p><b>Best Regrads</b></p>
    <p>${userName}</p>
    `  
  }
  transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
      console.log(err);
      res.sendStatus(403);
      res.send({
        status:'sucess'
      })
    }
    console.log('Message sent: %s', info.messageId);

        // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.send({
      status:info.messageId
    });
  })
})

module.exports = router;

