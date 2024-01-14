const { Schema, model } = require("mongoose");
const Products = require("./Products");

const orderSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  orderDate: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
      },
    },
    {
      type: Schema.Types.ObjectId,
      ref: "Products",
    }
  ],
});

//Custom validation to ensure at least one service is selected.
orderSchema.path("products").validate(function (value) {
  return value.length > 0;
}, "Atleast one product must be selected for the order");

const Order = model("Order", orderSchema);

module.exports = Order;
