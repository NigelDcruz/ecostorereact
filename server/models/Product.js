const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  qty: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
