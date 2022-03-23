const OnlineCamp = require("../models/OnlineCamp");
exports.createOnlineCamp = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const onlineCamp = await OnlineCamp.create(req.body);
    res.status(200).json({
      success: true,
      data: onlineCamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
