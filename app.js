
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminroutes=require('./route/adminroutes');
const shoproutes=require('./route/shoproutes');
// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
//using 404 for page not found
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
res.status(404).send('<h1>page not found!</h1>');
});
// Start the server
app.listen(497, () => {
  console.log('Server is running on port 3000');
});