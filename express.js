
const express=require("express");
const app=express();
app.use ((req,res,next)=>{
    console.log('in the middlewear');
    next();
});
app.use((req,res,next)=>{
    console.log('This is another middlewear');
    res.send('<h1> hello to node js </h1>');
})

  app.listen(402,()=>{
    console.log('server runs');
})