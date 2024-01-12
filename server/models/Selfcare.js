const { Schema, model } = require('mongoose');

const selfcareSchema = new Schema({
  name:
    {
      type: String,
      required: true,
    },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Selfcare = model('Selfcare', selfcareSchema);

module.exports = Selfcare;