const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { body } = require("express-validator");
const Model = require("../models/user");

router.post(
  "/signup",
  [
    body("firstName")
      .notEmpty()
      .isLength({ min: 2 }),
    body("sex")
      .trim()
      .notEmpty(),
    body("email")
      .trim()
      .notEmpty()
      .isEmail()
      .custom((value, { req }) => {
        return Model.User.findOne({ where: { email: value } }).then(
          userEmail => {
            if (userEmail) {
              return Promise.reject("Email address already exists!");
            }
          }
        );
      })
      .normalizeEmail(),
    body("phone")
      .isMobilePhone()
      .trim()
      .notEmpty(),
    body("idCardNumber")
      .trim()
      .notEmpty()
      .isLength({ min: 9, max: 9 }),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
  ],
  authController.signUpUsers
);

router.get("/users", authController.getUsers);

module.exports = router;
