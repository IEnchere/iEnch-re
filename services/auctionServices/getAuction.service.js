const Auction = require("../../models/Auction");

module.exports = {
  //   async getAuctionByCategory(category) {
  //     try {
  //       return await Auction.findOne({ category });
  //     } catch (err) {
  //       console.log(err);
  //       return err;
  //     }
  //   },

  //   async getAuctionByLocation(location) {
  //     try {
  //       return await Auction.findOne({ location });
  //     } catch (err) {
  //       console.log(err);
  //       return err;
  //     }
  //   },

  async getAuctionList() {
    try {
      return await Auction.find();
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getAuctionById(id) {
    try {
      return await Auction.findById(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
