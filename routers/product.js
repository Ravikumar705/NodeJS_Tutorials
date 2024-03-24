const express = require("express");
const router = express.Router();
const productController = require("../Controller/product");

router
  .get("/", productController.getProduct)
  .get("/:id", productController.getOneProduct)
  .post("/", productController.postProduct)
  // .put("product/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.router = router;
