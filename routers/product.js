const express = require("express");
const router = express.Router();
const productController = require("../Controller/product");

router
  .get("/", productController.getProduct)
  .post("/", productController.postProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.router = router;
