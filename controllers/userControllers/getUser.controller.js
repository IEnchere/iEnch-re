const services = require("../../services");

module.exports = {
  async getUserList(req, res) {
    try {
      const UserList = await services.userServices.get.getUserList();
      res.status(200).json({
        status: true,
        message: "This is the list of users",
        data: UserList,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
