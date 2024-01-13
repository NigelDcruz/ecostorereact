const db = require('../config/connection');
const { User, Food, Selfcare } = require('../models');
const userSeeds = require('./userSeeds.json'); 
const foodSeeds = require('./foodSeeds.json');
const selfcareSeeds = require ('./selfcareSeeds.json');
const cleanDB = require('./cleanDB.js'); 

db.once('open', async () => {
  try {
    // Clean the 'User' collection
    await cleanDB('User', 'user');

  await User.create(userSeeds);
  await Food.create(foodSeeds);
  await selfcareSeeds.create(selfcareSeeds);

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
});