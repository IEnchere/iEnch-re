const User = require("../../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async registerUser(
    firstName,
    lastName,
    userName,
    email,
    phoneNumber,
    password,
    role
  ) {
    // crypt the password
    const passwordHash = await bcrypt.hash(password, 12);

    try {
      return await User.create({
        _id: new mongoose.Types.ObjectId(),
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password: passwordHash,
        role,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
