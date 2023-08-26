const express=require('express');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const fs=require('fs');
const path=require('path')




  
app=express();
app.use(express.static(path.join(__dirname,'js')))
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));

})

app.post('/submitWish',(req,res)=>{
    
    const name=req.body.name;
    const email=req.body.email;
    const wish=req.body.wish;
    sendEmail(email,name,wish)

    res.redirect('./success');
   
    
});

app.get('/success',(req,res)=>{
    res.sendFile(path.join(__dirname,'success.html'))
})


function sendEmail(toemail,name,wish){
    const mailOptions = {
    from: 'from',
    to: toemail,
    subject:`The Magical Genie has something for you...`,
    text:getText(name,wish),
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'email',
          pass: '//Enter your password here'
        }
    });

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

};


function getText(name,wish){
    return `Dear ${name},

    I am writing to inform you that your wish has been granted! I know you wished for ${wish}, and I am happy to say that it is now yours.
    
    I know this may seem like a strange email, but I am actually a magical genie. I grant wishes to people who are kind and generous.So I decided to grant your wish as a way of saying thank you.
    
    I hope you enjoy your new ${wish}. And if you ever need anything else, please don't hesitate to ask.
    
    Sincerely,
    
    The Magical Genie
    
    P.S. I also attached a link to a YouTube video that will help you manifest your wish. Watch it and follow the instructions, and your wish will come true!
    
    [Youtube Link][https://youtu.be/fC9aj2FJOyA]
    
    I hope this email made you laugh. And I hope you enjoy your new ${wish}!`
}





app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'404.html'))
    } else if (req.accepts('json')){
        res.json({"Error":"404 not found"})
    } else{
        res.type('text').send("404 not found")
    }
})

app.listen(4500,()=>{
    console.log('Server is up and running on 4500');
})