const Order = require("../../models/Order");
const mongoose = require("mongoose");

module.exports = {
  async createOrder(req, res) {
    try {
      let { auction, proposedBid, user } = req.body;
      console.log(req.body);

      let createdOrder = await Order.create({
        _id: new mongoose.Types.ObjectId(),
        auction,
        proposedBid,
        user,
      });
      res.status(200).json({
        status: true,
        message: "the order was created successfully",
        createdOrder,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, err });
    }
  },
};
