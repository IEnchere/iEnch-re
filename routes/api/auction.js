const router = require("express").Router();
const controllers = require("../../controllers");
const { auth, restrictTo } = require("../../middlewares/auth");

router.post(
  "/createAuction",
  auth,
  restrictTo("admin"),
  controllers.auctionControllers.create.createAuction
);

router.get("/getAuctions", controllers.auctionControllers.get.getAuctionList);

router.delete(
  "/deleteAuction/:id",
  auth,
  restrictTo("admin"),
  controllers.auctionControllers.delete.deleteAuction
);

router.put(
  "/updateAuction/:id",
  auth,
  restrictTo("admin"),
  controllers.auctionControllers.update.updateAuction
);

module.exports = router;
