const express = require("express");
const router = express.Router();
const users = require("./users");
const watchList = require("./watchList")

router.use("/watchlist",watchList)
router.use("/users",users)

module.exports = router;
