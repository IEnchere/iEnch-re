const services = require("../../services");

module.exports = {
  async updateAuction(req, res) {
    try {
      const { id } = req.params;
      const {
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

      let existingAuction = await services.auctionServices.get.getAuctionById(
        id
      );

      if (existingAuction) {
        await services.auctionServices.update.updateAuction(
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
        );

        existingAuction = await services.auctionServices.get.getAuctionById(id);

        res.status(200).json({
          status: true,
          message: "The auction was updated",
          data: existingAuction,
        });
      } else {
        res.status(404).json({ status: false, message: "Auction not exist" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
