const Auction = require("../../models/User");
const mongoose = require("mongoose");

module.exports = {
  async updateUser(
    id,
    firstName,
    lastName,
    userName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    role
  ) {
    try {
      return await Auction.findByIdAndUpdate(id, {
        id: new mongoose.Types.ObjectId(),
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        role,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
