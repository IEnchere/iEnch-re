const { check, validationResult } = require("express-validator");
// const services = require("../services");

exports.validateRegisterRequest = [
  check("firstName").notEmpty().withMessage("firstName is required"),
  check("lastName").notEmpty().withMessage("lastName is required"),
  check("email")
    .notEmpty()
    .isEmail()
    .normalizeEmail()
    .withMessage("valid email is required"),
  // .custom((email) => {
  //   const  currentUserEmail = services.userServices.get.getUserByEmail({
  //     email,
  //   });
  //   if ( currentUserEmail) {
  //     throw new Error("Email already in use");
  //   }
  //   return true;
  // }),
  check("phoneNumber")
    .notEmpty()
    .isMobilePhone()
    .withMessage("valid phoneNumber is required"),
  // .custom(async (phoneNumber) => {
  //   const existingPhoneNumber =
  //     services.userServices.get.getUserByPhoneNumber({ phoneNumber });
  //   if (existingPhoneNumber) {
  //     throw new Error("phoneNumber already in use");
  //   }
  // }),
  check("password")
    .custom((password) => {
      if (
        password &&
        password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ) {
        return true;
      }
    })
    .withMessage(
      "Password must contain 8 characters and atleast 1 number, 1 uppercase and lowercase letter."
    ),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Valid Email is required"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ error: errors.array() });
  }
  next();
};
