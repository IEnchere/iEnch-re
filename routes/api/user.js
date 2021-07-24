const router = require("express").Router();
const controllers = require("../../controllers");
const {
  validateRegisterRequest,
  validateSigninRequest,
  isRequestValidated,
  validateDuplication,
} = require("../../validators/user");

const { auth, restrictTo } = require("../../middlewares/auth");

router.post(
  "/register",
  validateRegisterRequest,
  isRequestValidated,
  validateDuplication,
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
  validateDuplication,
  auth,
  restrictTo("admin", "user"),
  controllers.userControllers.update.updateUser
);

module.exports = router;
