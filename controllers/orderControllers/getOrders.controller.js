const Order = require("../../models/Order");

module.exports = {
  async getOrders(req, res) {
    try {
      const orderList = await Order.find().populate("user").populate("auction");
      res.status(200).json({
        status: true,
        message: "This is the list of orders",
        data: orderList,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
