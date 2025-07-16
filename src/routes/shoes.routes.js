const express = require('express')
const { PrismaClient } = require('../../generated/prisma')
const { createShoes, getAllShoes } = require('../controllers/shoes.controller')

const prisma = new PrismaClient()
const router = express.Router()

router.post('/shoes', createShoes)
router.get('/shoes', getAllShoes)

module.exports = router