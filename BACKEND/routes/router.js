const router = require("express").Router();

const reviewRouter = require("./review");

router.use("/", reviewRouter);

module.exports = router;