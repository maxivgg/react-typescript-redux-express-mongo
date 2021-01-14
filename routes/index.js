let router = require("express").Router();
const salesRouter = require("./sales");

router.use("/api/sales", salesRouter)

module.exports = router;