const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
    },
    auction: {
      type: Schema.Types.ObjectId,
      ref: "Auction",
    },
    proposedBid: [Number],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = Order = mongoose.model("Order", orderSchema);
