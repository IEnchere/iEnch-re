const router = require("express").Router();
const controllers = require("../../controllers");
const {
  validateRegisterRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../../validators/user");

const { auth, restrictTo } = require("../../middlewares/auth");
// const authentificate = require("../../middlewares/auth");

router.post(
  "/register",
  validateRegisterRequest,
  isRequestValidated,
  controllers.userControllers.create.registerUser
);

router.post(
  "/login",
  validateSigninRequest,
  isRequestValidated,
  controllers.userControllers.authentificate.loginUser
);

router.get(
  "/getUsers",
  auth,
  restrictTo("admin"),
  controllers.userControllers.get.getUserList
);

router.delete(
  "/deleteUser/:id",
  // authentificate.auth,
  controllers.userControllers.delete.deleteUser
);

router.put(
  "/updateUser/:id",
  // authentificate.auth,
  controllers.userControllers.update.updateUser
);

module.exports = router;
