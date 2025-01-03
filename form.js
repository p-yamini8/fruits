const express=require("express");
const path=require("path");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.get('/contactus',(req,res,next)=>{
res.sendFile(path.join(__dirname,"views","form.html"));
} );
app.post("/contactus",(req,res)=>{
res.redirect("/success")
})
app.get( '/success',(req,res)=>{
    res.send(`Form successfuly filled`)
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})
app.listen(3000,()=>{
    console.log("running");
})