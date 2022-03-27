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

exports.getUserOnlineCamps = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const onlineCamp1 = await OnlineCamp.find({ user: userId });
    return res.status(200).json({ success: true, data: onlineCamp1 });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.deleteOnlineCamp = async (req, res, next) => {
  try {
    await OnlineCamp.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
