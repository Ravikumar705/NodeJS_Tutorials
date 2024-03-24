const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const server = express();
const path = require("path");
const productRouter = require("./routers/product");

// Get API
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(express.urlencoded());
server.use("/api/products", productRouter.router);
server.use("*", (req, res) => {
  // res.sendFile(path.resolve(__dirname,dist,index.html));
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
