const express = require('express')
const shoesRoute = require('./shoes.routes')

const router = express.Router()

router.use(shoesRoute)

module.exports = router