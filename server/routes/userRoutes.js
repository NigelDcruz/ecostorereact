const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', userController.getUsers);

router.get('/:_id', userController.getUserbyId);
router.put('/:_id', userController.updateUser);
router.delete('/:_id', userController.deleteUser);

router.post('/newUser', userController.createUser);



module.exports = router;