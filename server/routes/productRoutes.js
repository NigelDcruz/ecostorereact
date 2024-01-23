const express = require("express");
const router = express.Router();
// const products = require("../dummy_products");
const { asyncHandler } = require("../middleware/asynHandler");
const Product = require("../models/Product");

// GET all products
// on an order and on the dashboard

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

// GET a product on an order and on the dashboard (by id)
// Getting a product from an order, there should be a link attached to each product redirecting them to the single product.

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  })
);

// CREATE(post) a product
// user not authorized to do

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
  })
);

// UPDATE(put) a product (by id)
// ratings? maybe in the future as we work on the project

// DELETE a product (by id)
// user should not be authorized to delete products or edit there order

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.json(product);
  })
);

module.exports = router;
