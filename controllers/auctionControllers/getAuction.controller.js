const services = require("../../services");

module.exports = {
  async getAuctionList(req, res) {
    try {
      const auctionList = await services.auctionServices.get.getAuctionList();
      res.status(200).json({
        status: true,
        message: "This is the list of auctions",
        data: auctionList,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
