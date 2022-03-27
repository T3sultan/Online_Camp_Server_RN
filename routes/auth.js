const express = require("express");
const { register, login, getProfile } = require("../controllers/auth");
const { protect } = require("../middleware/Auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);
module.exports = router;
