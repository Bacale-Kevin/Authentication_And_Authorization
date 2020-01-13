const Product = require("../models/product");

module.exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then(result => res.json(result))
    .catch(error => console.log(error));
};
