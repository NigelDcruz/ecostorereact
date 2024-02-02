const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/Product");

// GET all products
// on an order and on the dashboard

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET a product on an order and on the dashboard (by id)
// Getting a product from an order, there should be a link attached to each product redirecting them to the single product.

const getProductbyId = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  getProducts,
  getProductbyId,
};
