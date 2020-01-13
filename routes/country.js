const Country = require("../controllers/country");
const express = require("express");
const router = express.Router();

router.get("/countries", Country.getCountries);


module.exports = router;