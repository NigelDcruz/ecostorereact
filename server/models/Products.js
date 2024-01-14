const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
  name:
    {
      type: String,
      required: true,
    },
  price: {
    type: Number,
    require: true,
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
});

const Food = model('Food', foodSchema);

module.exports = Food;