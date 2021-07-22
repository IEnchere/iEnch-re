const router = require("express").Router();
const controllers = require("../../controllers");
const {
  validateRegisterRequest,
  validateSigninRequest,
  isRequestValidated,
} = require("../../validators/user");

const { auth, restrictTo } = require("../../middlewares/auth");

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
  auth,
  restrictTo("admin", "user"),
  controllers.userControllers.delete.deleteUser
);

router.put(
  "/updateUser/:id",
  validateRegisterRequest,
  isRequestValidated,
  auth,
  restrictTo("admin", "user"),
  controllers.userControllers.update.updateUser
);

module.exports = router;
