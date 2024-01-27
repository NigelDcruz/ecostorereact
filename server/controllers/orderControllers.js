const Order = require("../models/Order");
const User = require("../models/User");

/*
UPDATE(put) a order (by id)
only when user is signed in

DELETE a order (by id)
only when user is signed in, maybe we can implement a certain amount of time 
they have before they are able to delete the order?
*/

const getOrders = async (req, res) => {
  try {
    const userId = req.body.user._id;
console.log(userId);
    const orders = await Order.find();
  console.log(orders);
    if (!orders) {
      return res.status(404).json({ error: "Server couldnt find orders" });
    }
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server couldnt find orders" });
  }
};

const getOrder = async (req, res) => {
  try {
    const userId = req.body.user._id; //change to req.user._id once we have authentication

    const orderId = req.params.order._id;
    const order = await Order.findById(userId, orderId);
    if (!order) {
      return res.status(404).json({ error: "Couldnt find order" });
    }
    res.json(order);
  } catch (error) {
    console.log(error);
    res.json(500).json({ error: "Server couldn't find order" });
  }
};

const createOrder = async (req, res) => {
  try {
    const userId = req.body.user._id; //change to req.user._id once we have authentication

    const newOrder = await Order.create(req.body);
    if (!newOrder) {
      return res.status(404).json({
        error: "Make sure you have atleast one product to create an order",
      });
    }
    await User.findByIdAndUpdate(userId, {
      $push: { orders: newOrder._id },
    });

    res.json(newOrder);
  } catch (error) {
    console.log(error);
    res.json(500).json({ error: "Server couldnt create an order " });
  }
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
};
