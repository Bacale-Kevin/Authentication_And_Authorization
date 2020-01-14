const Model = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')

exports.signUpUsers = (req, res, next) => {
    //Collecting any validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res
      .status(422)
      .json({ message: "Validation failed", errors: errors.array() });
  }
  //Hashing the password in the database
  const password = req.body.password;
  bcrypt.hash(password, 12)
  .then(hashedPw => {
    Model.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sex: req.body.sex,
        phone: req.body.phone,
        residence: req.body.residence,
        email: req.body.email,
        role: req.body.role,
        idCardNumber: req.body.idCardNumber,
        password: hashedPw
      })
      .then(result => {
      res.status(201).json(result);
    })
    .catch(error => res.json(error).status(500));
  })
 
    
};

exports.getUsers = (req, res, next) => {
  Model.User.findAll()
    .then(result => res.json(result))
    .catch(error => res.json(error));
};
