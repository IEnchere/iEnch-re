const router = require("express").Router();
const controllers = require("../../controllers");
const { auth, restrictTo } = require("../../middlewares/auth");

router.post(
  "/createOrder",
  auth,
  restrictTo("user"),
  controllers.orderControllers.create.createOrder
);

router.get(
  "/getOrders",
  auth,
  restrictTo("admin"),
  controllers.orderControllers.get.getOrders
);

// router.delete(
//   "/deleteOrder/:id",
//   auth,
//   restrictTo("admin"),
//   controllers.auctionControllers.delete.deleteOrder
// );

// router.put(
//   "/updateAuction/:id",
//   auth,
//   restrictTo("admin"),
//   uploadAuctionImages,
//   customAuctionImages,
//   controllers.auctionControllers.update.updateAuction
// );

module.exports = router;
