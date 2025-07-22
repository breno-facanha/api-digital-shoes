const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

const createShoes = async (req, res) => {
  const { name, brand, price, size, color, imgUrl, inStock } = req.body;

    const shoes = await prisma.shoes.create({
      data: {
        name,
        brand,
        price,
        size,
        color,
        imgUrl,
        inStock,
      },
    });
    res.status(201).json(shoes);
};

const getAllShoes = async (req, res) => {
  const shoes = await prisma.shoes.findMany();
  res.status(200).json(shoes);
};

const updateShoes = async (req, res) => {
  const { id } = req.params;
  const { name, brand, price, size, color, imgUrl, inStock } = req.body;

  try {
    const shoes = await prisma.shoes.update({
      where: { id },
      data: {
        name,
        brand,
        price,
        size,
        color,
        imgUrl,
        inStock,
      },
    });
    res.status(200).json(shoes);  
  } catch (error) {
    res.status(404).json({ error: 'Shoe not found' });
  }
};

const deleteShoes = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.shoes.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Shoe not found' });
  }
};

const getShoesById = async (req, res) => {
  const { id } = req.params;
  try {
    const shoes = await prisma.shoes.findUnique({
      where: { id }
    });
    if (!shoes) {
      return res.status(404).json({ error: 'Shoe not found' });
    }
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createShoes,
  getAllShoes,
  updateShoes,
  deleteShoes,
  getShoesById
};
