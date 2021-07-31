const Auction = require("../../models/Auction");
const mongoose = require("mongoose");

module.exports = {
  async createAuction(req, res) {
    try {
      let {
        category,
        Id,
        title,
        // imageCover,
        // images,
        currentPrice,
        location,
        shortDesc,
        proposedBid,
        marketPrice,
        startingPrice,
        beginDate,
        endDate,
        offerDescription,
        validity,
        moreInfo,
      } = req.body;
      console.log(req.body);

      // if (req.file) {
      //   auction.imageCover = req.file.path;
      // }

      let createdAuction = await Auction.create({
        _id: new mongoose.Types.ObjectId(),
        category,
        Id,
        title,
        // imageCover,
        // images,
        currentPrice,
        proposedBid,
        location,
        shortDesc,
        marketPrice,
        startingPrice,
        beginDate,
        endDate,
        offerDescription,
        validity,
        moreInfo,
      });
      res.status(200).json({
        status: true,
        message: "the auction was created successfully",
        createdAuction,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, err });
    }
  },
};
