const User = require("../models/User");

exports.register = async (req, res, next) => {
  console.log("register controller");
  try {
    const { name, email, password, bio } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, msg: "User already exists" });
    }
    const user = await User.create({
      name,
      email,
      password,
      bio,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal error" });
    next(error);
  }
};

exports.login = async (req, res, next) => {
  console.log("login controller");
};
