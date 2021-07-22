const router = require("express").Router();
const controllers = require("../../controllers");
const authentificate = require("../../middlewares/auth");

router.post(
  "/createAuction",
  authentificate.auth,
  controllers.auctionControllers.create.createAuction
);

router.get("/getAuctions", controllers.auctionControllers.get.getAuctionList);

router.delete(
  "/deleteAuction/:id",
  authentificate.auth,
  controllers.auctionControllers.delete.deleteAuction
);

router.put(
  "/updateAuction/:id",
  authentificate.auth,
  controllers.auctionControllers.update.updateAuction
);

module.exports = router;
