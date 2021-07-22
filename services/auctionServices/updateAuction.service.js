const Auction = require("../../models/Auction");
const mongoose = require("mongoose");

module.exports = {
  async updateAuction(
    id,
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
  ) {
    try {
      return await Auction.findByIdAndUpdate(id, {
        id: new mongoose.Types.ObjectId(),
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
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
