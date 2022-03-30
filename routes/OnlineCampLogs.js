const express = require("express");
const { createOnlineCampLogs } = require("../controllers/OnlineCampsLogs");
const { protect } = require("../middleware/Auth");

const router = express.Router();

router.route("/").post(protect, createOnlineCampLogs);

module.exports = router;
