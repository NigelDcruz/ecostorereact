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
  quantity: {
    type: Number,
    required: true,
  },
});

const Product = model("Product", productSchema);

module.exports = Product;
