'use strict'

const express = require('express')
const yelp = require('yelp-fusion')

const router = express.Router()
const client = yelp.client(process.env.API_KEY)

let data
client
  .business(process.env.CLIENT_ID)
  //   .reviews(process.env.CLIENT_ID)
  .then(response => {
    console.log(response.jsonBody.reviews[0].text)
    data = response.jsonBody.reviews[0].text
  })
  .catch(e => {
    console.log(e)
  })

router.get('/', (req, res) => {
  res.json(data)
})

module.exports = router
