const services = require("../../services");

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

      const existingPhoneNumber =
        await services.userServices.get.getUserByPhoneNumber(phoneNumber);

      const currentUserEmail = await services.userServices.get.getUserByEmail(
        email
      );
      s;

      //  checking if e-mail is in use

      if (currentUserEmail)
        return res.status(406).json({
          status: false,
          message: "Email already in use",
        });

      //  checking if phoneNumber is in use
      if (existingPhoneNumber)
        return res.status(406).json({
          status: false,
          message: "PhoneNumber already in use ",
        });

      // make the user sure from the password

      if (password !== confirmPassword)
        return res.status(400).json({
          status: false,
          message: "verify the password",
        });

      const newUser = await services.userServices.create.registerUser(
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password,
        role
      );
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

//  function to validate the email structure

// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
