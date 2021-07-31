const router = require("express").Router();

router.use("/api/auction", require("./api/auction"));
router.use("/api/user", require("./api/user"));
router.use("/api/order", require("./api/order"));

module.exports = router;
