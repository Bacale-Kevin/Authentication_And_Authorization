const Country = require("../models/country");

exports.getCountries = (req, res, next) => {
  Country.Country.findAll()
      .then(result => res.json(result))
    .catch(error => res.json(error));
};
