const express = require('express')
const { PrismaClient } = require('../../generated/prisma')
const { createShoes, getAllShoes, updateShoes, deleteShoes, getShoesById  } = require('../controllers/shoes.controller')

const prisma = new PrismaClient()
const router = express.Router()

router.post('/shoes', createShoes)
router.get('/shoes', getAllShoes)
router.put('/shoes/:id', updateShoes)
router.delete('/shoes/:id', deleteShoes)
router.get('/shoes/:id', getShoesById)

module.exports = router