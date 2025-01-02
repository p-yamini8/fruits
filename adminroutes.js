const express=require('express');
const router=express.Router();

// Serve the form at the /add-product route
router.get('/add-product', (req, res,next) => {
    res.send(`
      <form action="/admin/add-product" method="POST">
        <label for="product-name">Product Name:</label>
        <input type="text" id="product-name" name="name"><br><br>
  
        <label for="product-size">Product Size:</label>
        <input type="text" id="product-size" name="size"><br><br>
  
        <button type="submit">Submit</button>
      </form>
    `);
  });
  router.post('/add-product', (req, res,next) => {
    console.log(req.body); // Log the parsed data
    res.send(`<p>Product added!</p>`);
    
  });
module.exports=router;