const db = require('../config/connection');
const { User, Products, Order } = require('../models');
const userSeeds = require('./userSeeds.json'); 
const productSeeds = require('./productSeeds.json');
const orderSeeds = require('./orderSeeds.json');
const cleanDB = require('./cleanDB.js'); 

db.once('open', async () => {
  try {
    // Clean the 'User' collection
    await cleanDB('User', 'user');

  await User.create(userSeeds);
  await Products.create(productSeeds);
  await Order.create(orderSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});