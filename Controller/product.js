const product = require("../Model/product");

exports.postProduct = (req, res) => {};

exports.getProduct = async (req, res) => {
  const products = await product.find({});
  return res.json(products);
};

exports.replaceProduct = (req, res) => {};

exports.updateProduct = (req, res) => {};

exports.deleteProduct = (req, res) => {};
