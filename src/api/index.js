const express = require('express')

const emojis = require('./emojis')
const yelp = require('./yelp')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  })
})

router.use('/emojis', emojis)
router.use('/yelp', yelp)

module.exports = router
