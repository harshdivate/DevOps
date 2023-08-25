import express from 'express';


const app=express();



app.get('/',(req,res)=>{
    res.send('<h2>hi there</h2>');
})

app.listen(3000,()=>{
    console.log(`Server is up and running on 3000`);
})