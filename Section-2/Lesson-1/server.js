const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';
let name="harsh";
let email="harshdivate45@gmail.com";
let wish="wish";

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        
        <div class="container-fluid">
        <div class="jumbotron bg-primary">
            <h1 class="text-center text-light"><strong>MAKE A WISH</strong></h1>
            
        </div>

        <section>
        <h2>My wish </h2>
          <h3>${name} ${email} ${wish}</h3>
        </section>

        <div class="form-div" style="padding:50px 50px;">
            <form action="/submit-wish" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" placeholder="Enter Name"  name="name" id="name">
                </div>
    
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" name="email" id="email">
                </div>
    
                <div class="form-group">
                    <label for="wish">Wish</label>
                    <input type="text" class="form-control" placeholder="Enter wish" name="wish" id="wish">
                </div>
    
                <button class="btn btn-primary">Make A WISH</button>
            </form>
        </div>
    </div>
      </body>
    </html>
  `);
});

app.post('/submit-wish', (req, res) => {

  wish=req.body.wish;
  email=req.body.email;
  name=req.body.name;
  console.log(wish+email+name);

  res.redirect('/');
});

app.listen(80,()=>{
  console.log(`Server is up and running`);
});
