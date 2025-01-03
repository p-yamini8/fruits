const express=require('express');
const bodyparser=require("body-parser");
const fs=require("fs");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',(req,res,next)=>{
    fs.readFile("username.txt",(err,data)=>{
        if(err)
        {
            console.log('error');
            data='no chat Exists';
        }
        res.send(`${data}<form action='/' method='POST' onSubmit="document.getElementById('username').value=localStorage.getItem('username')">

            <input type="text" name="message" id="message" placeholder="Enter your message">
            
            <input type="hidden" name="username" id="username"> 
           </br>
<button type="submit">Send</button>
                    </form>`);
       })
  
})


app.post('/',(req,res)=> {
    console.log(req.body.username);
    console.log(req.body.message);
   const logentry=`${req.body.username}:${req.body.message}`
    fs.writeFile("username.txt",logentry,{flag:"a"},(err)=>{
        if(err){
            console.log('error found')
        }
        res.redirect("/");
    });

});
    app.get('/login',(req,res)=>{
   
        res.send(`<form action='/login' method='POST' onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
    
    <input type="text" name="username" id="username" placeholder="Enter your name"> 
    </br>
            <button type="submit">Login</button></form>`);
    });
    
app.post("/login",(req,res)=>{
    res.redirect("/");
});
 
app.listen(3000,()=>{
    console.log("server running")
});