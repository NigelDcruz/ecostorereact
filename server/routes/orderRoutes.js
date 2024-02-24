const express = require("express");
const router = express.Router();
const funcs = require("../controllers/orderControllers");
const protect = require("../middleware/authMiddleware");

router.get("/dashboard/orders", protect, funcs.getOrders);
router.post("/", protect, funcs.createOrder);

// router.get("/:orderId", orderController.getOrder);
// router.put("/:orderId", orderController.updateOrder);
// router.delete("/deleteOrder", orderController.deleteOrder);

module.exports = router;
