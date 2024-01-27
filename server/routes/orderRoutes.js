const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');

router.get('/:userId', orderController.getOrders);
router.get('/:userId/:orderId', orderController.getOrder);

router.post('/', orderController.createOrder);

module.exports = router;