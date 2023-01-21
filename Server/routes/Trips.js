const express = require('express')
const router = express.Router()

// define the home page route
router.get('/',  async (req, res) => {
  res.send('hellou trips')
})
// define the about route
router.get('/about', (req, res) => {
  res.send("hello from trips/about")
})

module.exports = router;