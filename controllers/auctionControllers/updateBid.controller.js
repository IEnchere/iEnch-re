// const Auction = require("../../models/Auction");

// module.exports = {
//   async updateBid(req, res) {
//     let auction = req.body;
//     let currentPrice = req.body.currentPrice;
//     let { id } = req.params;

//     try {
//       let result = await Auction.findByIdAndUpdate(
//         id,
//         {
//           $set: {
//             "biddings.$[inner].proposedPrice": currentPrice,
//           },
//         },
//         {
//           arrayFilters: [{ "inner._id": req.params.biddingId }],
//           new: true,
//         }
//       );

//       if (!result)
//         return res.status(404).json({
//           status: true,
//           message: " Auction updated successfully",
//           data: result,
//         });

//       res.send(result);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//   },
// };
