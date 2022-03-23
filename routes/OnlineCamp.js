const express = require("express");
const { createOnlineCamp } = require("../controllers/OnlineCamp");
const { protect } = require("../middleware/Auth");

const router = express.Router();

router.route("/").post(protect, createOnlineCamp);

module.exports = router;
