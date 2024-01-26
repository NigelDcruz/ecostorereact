const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');


router.get('/', userController.getUsers);

//when a user logs in
router.get('/:_id', userController.getUserbyId);


router.put('/:_id', userController.updateUser);
router.delete('/:_id', userController.deleteUser);

//this should be the register route.
router.post('/newUser', userController.createUser);

module.exports = router;