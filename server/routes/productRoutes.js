const express = require("express");
const router = express.Router();
const funcs = require("../controllers/productControllers");
const protect = require("../middleware/authMiddleware");

router.get("/", funcs.getProducts, funcs.updateProduct);
router.get("/product-detail/:id", funcs.getProductbyId);
router
.route("/cart")
.put(protect, funcs.updateProduct)
.delete(protect, funcs.deleteProduct);


module.exports = router;
