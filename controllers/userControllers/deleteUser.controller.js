const services = require("../../services");

module.exports = {
  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const deletedUser = await services.userServices.delete.deleteUser(id);

      res.status(200).json({
        status: true,
        message: "The User was removed",
        data: deletedUser,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
