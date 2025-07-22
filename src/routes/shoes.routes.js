const express = require('express')
const { PrismaClient } = require('../../generated/prisma')
const { createShoes, getAllShoes, updateShoes, deleteShoes } = require('../controllers/shoes.controller')

const prisma = new PrismaClient()
const router = express.Router()

router.post('/shoes', createShoes)
router.get('/shoes', getAllShoes)
router.put('/shoes/:id', updateShoes)
router.delete('/shoes/:id', deleteShoes)

module.exports = router