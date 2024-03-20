const express = require("express");
const dotenv = require("dotenv").config();
const server = express();
const productRouter = require("./routers/product");

// Get API
server.use("/", productRouter.router);

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
