const express = require('express');
const router = express.Router();

// Serve the shop homepage
router.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the Shop!</h1>');
});


module.exports = router;