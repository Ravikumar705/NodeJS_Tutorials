const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// connect to mongoDB using Mongoose
const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to the dataBase Successfully");
};

main().catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, min: 0, max: 1000 },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  thumbnail: { type: String, required: true },
});

const product = mongoose.model("Product", productSchema);
module.exports = product;
