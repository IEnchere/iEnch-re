const services = require("../../services");

module.exports = {
  async deleteAuction(req, res) {
    try {
      const { id } = req.params;
      const existingAuction = await services.auctionServices.get.getAuctionById(
        id
      );
      if (existingAuction) {
        await services.auctionServices.delete.deleteAuction(id);
        res
          .status(200)
          .json({ status: true, message: "The auction was removed" });
      } else {
        res.status(404).json({ status: false, message: "Auction Not Found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
