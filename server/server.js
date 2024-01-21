const express = require('express');
const db = require('./config/connection');
const getUsersRoutes = require('./routes/userRoutes');

const PORT = 5173;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.use('/users', getUsersRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});