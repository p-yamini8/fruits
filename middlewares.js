const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the form at the /add-product route
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="POST">
      <label for="product-name">Product Name:</label>
      <input type="text" id="product-name" name="name"><br><br>

      <label for="product-size">Product Size:</label>
      <input type="text" id="product-size" name="size"><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submissions
app.post('/add-product', (req, res) => {
  console.log(req.body); // Log the parsed data
  res.send('Product added!');
});

// Start the server
app.listen(70, () => {
  console.log('Server is running on port 70');
});