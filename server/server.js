const express = require('express');
const db = require('./config/connection');
const getUsersRoutes = require('./routes/userRoutes');
const getProducts = require('./routes/productRoutes');
const getOrders = require('./routes/orderRoutes');

const PORT = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const products = await getProducts(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server error'});
  }
});

app.use('/users', getUsersRoutes);
app.use('/orders', getOrders);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});