const express = require("express");
const router = express.Router();
const employees = require("./data/employees.js");
const productCategories = require("./data/product-categories.js");
const products = require("./data/products.js");
const utils = require("./utils.js");

router.get("/", (req, res) => {
  res.send("App is running");
});

router.get("/employee", (req, res) => {
  res.status(200).json(employees);
});

router.get("/product", (req, res) => {
   res.status(200).json(products);
});

router.get("/product-category", (req, res) => {
  res.status(200).json(productCategories);
});


module.exports = router;
