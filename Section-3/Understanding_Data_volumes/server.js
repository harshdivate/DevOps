const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');

const fs=require('fs');
const fsPromises=require('fs').promises;


const app=express();
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','index.html'))
})

app.post('/submit',async (req,res)=>{
    
    const title=req.body.name;
    const feedback=req.body.feedback;

    const finalPath=path.join(__dirname,'feedback',title+'.txt');
    const tempPath=path.join(__dirname,'temp',title+'.txt');

    await fsPromises.writeFile(tempPath,feedback);
    if(!fs.existsSync(path.join(finalPath,title+'.txt'))){
        await fsPromises.writeFile(finalPath,feedback)
    }

    
    res.json({"Message":"Success"})
});



app.listen(3000,()=>{
    console.log(`Server is up and listening in 3000`);
})