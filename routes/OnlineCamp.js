const express = require("express");
const {
  createOnlineCamp,
  getUserOnlineCamps,
  deleteOnlineCamp,
  homeCamp,
  getSaveOnlineCamps,
} = require("../controllers/OnlineCamp");
const { protect } = require("../middleware/Auth");

const router = express.Router();

router.route("/").post(protect, createOnlineCamp);
router.route("/getUserOnlineCamps").get(protect, getUserOnlineCamps);
router.route("/:id").delete(protect, deleteOnlineCamp);
router.route("/home").get(protect, homeCamp);
router.route("/getSaveOnlineCamps").get(protect, getSaveOnlineCamps);
module.exports = router;
