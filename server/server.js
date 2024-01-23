const express = require('express');
const db = require('./config/connection');
const getUsersRoutes = require('./routes/userRoutes');
const { getProducts } = require('./controllers/productControllers');
const { getUserbyId } = require('./controllers/userControllers');

const PORT = 5173;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const products = await getProducts(req, res);
    res.render('Welcome to the home page!', {products});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Server error'});
  }
});

app.use('/users', getUsersRoutes);
// app.use('/users/:id', getUserbyId);
// app.use('/users/newUser', createUser);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});