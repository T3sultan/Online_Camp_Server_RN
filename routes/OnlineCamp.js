const express = require("express");
const {
  createOnlineCamp,
  getUserOnlineCamps,
  deleteOnlineCamp,
} = require("../controllers/OnlineCamp");
const { protect } = require("../middleware/Auth");

const router = express.Router();

router.route("/").post(protect, createOnlineCamp);
router.route("/getUserOnlineCamps").get(protect, getUserOnlineCamps);
router.route("/:id").delete(protect, deleteOnlineCamp);

module.exports = router;
