const Auction = require("../../models/Auction");

module.exports = {
  async deleteAuction(id) {
    try {
      return await Auction.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
