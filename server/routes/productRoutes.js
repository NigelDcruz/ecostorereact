const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getProducts);
router.get("/:_id", productController.getProductbyId);
router.put("/:_id", productController.updateProduct);
router.delete("/:_id", productController.deleteProduct);
router.post("/newProduct", productController.createProduct);

module.exports = router;
