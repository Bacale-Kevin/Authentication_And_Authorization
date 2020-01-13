const express = require("express");
const ProductController = require('../controllers/product')

const router = express.Router();

router.get("/products", ProductController.getProducts);


module.exports = router