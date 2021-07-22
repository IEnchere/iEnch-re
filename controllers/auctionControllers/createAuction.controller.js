const services = require("../../services");
const user = require("../../controllers");
module.exports = {
  async createAuction(req, res) {
    try {
      let {
        category,
        title,
        pictures,
        location,
        shortDesc,
        marketPrice,
        startingPrice,
        beginDate,
        endDate,
        offerDescription,
        validity,
        moreInfo,
      } = req.body;

      const newAuction = await services.auctionServices.create.createAuction(
        category,
        title,
        pictures,
        location,
        shortDesc,
        marketPrice,
        startingPrice,
        beginDate,
        endDate,
        offerDescription,
        validity,
        moreInfo
      );

      res.status(201).json({
        status: true,
        message: "A new Auction has been created",
        data: newAuction,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err });
    }
  },
};
