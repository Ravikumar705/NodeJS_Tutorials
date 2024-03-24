const mongoose = require("mongoose");
const product = require("../Model/product");

exports.postProduct = async (req, res) => {
  try {
    const { title, description, thumbnail } = req.body;
    if (!title || !description || !thumbnail) {
      return res.status(400).send({
        success: false,
        message: "required fields are missing",
      });
    }
    const newProduct = new product({ ...req.body });
    await newProduct.save();
    return res.status(201).send({
      success: true,
      message: "new product created successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error while posting data",
      error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const products = await product.find({});
    if (!products) {
      return res.status(404).send({
        success: false,
        message: "No data found",
      });
    }
    return res.status(200).send({
      success: true,
      productCount: products.length,
      products,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error while finding data",
      error,
    });
  }
};
exports.getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const oneProduct = await product.findById(id);
    console.log(oneProduct);
    if (!oneProduct) {
      return res.status(404).send({
        success: false,
        message: "No data found",
      });
    }
    return res.status(200).send({
      success: true,
      oneProduct,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error while finding data",
      error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(204).send({
        success: false,
        message: "please send proper data",
      });
    }
    // console.log(id);
    const updatedProduct = await product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "product updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: true,
      message: "Unable to update products",
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(204).send({
        success: false,
        message: "id not found for product",
      });
    }
    const productDeleted = await product.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Server error while deleting product",
    });
  }
};

exports.replaceProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(204).send({
        success: false,
        message: "please send proper data",
      });
    }
    // console.log(id);
    const updatedProduct = await product.findOneAndReplace(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "product updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: true,
      message: "Unable to update products",
      error,
    });
  }
};
