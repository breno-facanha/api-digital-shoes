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

module.exports = {
  createShoes,
  getAllShoes
};
