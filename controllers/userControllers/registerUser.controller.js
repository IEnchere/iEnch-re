const User = require("../../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register User

module.exports = {
  async registerUser(req, res) {
    try {
      let {
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        role,
      } = req.body;

      // crypt the password
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        _id: new mongoose.Types.ObjectId(),
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password: passwordHash,
        role,
      });
      // console.log(password);
      // console.log(newUser.password);

      res.status(201).json({
        status: true,
        message: "A new user has been registered",
        data: newUser,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err });
      console.log(err);
    }
  },
};
