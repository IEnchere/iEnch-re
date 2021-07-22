const services = require("../../services");

module.exports = {
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const {
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        role,
      } = req.body;

      let existingUser = await services.userServices.get.getUserById(id);

      if (existingUser) {
        await services.userServices.update.updateUser(
          id,
          firstName,
          lastName,
          userName,
          email,
          phoneNumber,
          password,
          confirmPassword,
          role
        );

        existingUser = await services.userServices.get.getUserById(id);

        res.status(200).json({
          status: true,
          message: "The user was updated",
          data: existingUser,
        });
      } else {
        res.status(404).json({ status: false, message: "User not exist" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
