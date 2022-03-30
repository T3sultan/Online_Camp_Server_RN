const OnlineCamp = require("../models/OnlineCamp");
const OnlineCampLogs = require("../models/OnlineCampLogs");

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
exports.homeCamp = async (req, res, next) => {
  try {
    //user should not be able to explore his/her own onlineCamp
    const userId = req.user.id;
    const onlineCamps = await OnlineCamp.find({
      user: { $ne: userId },
    }).populate("user");

    res.status(200).json({
      success: true,
      data: onlineCamps,
      total: onlineCamps.length,
    });

    //user should not be able to explore already viewed onlineCamp
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

exports.getSaveOnlineCamps = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const onlineCampLogs = await OnlineCampLogs.find({
      user: userId,
      status: "saved",
    });
    const onlineCamps = await OnlineCamp.find({
      _id: { $in: onlineCampLogs.map(({ onlineCamp }) => onlineCamp) },
    });
    res.status(200).json({
      success: true,
      onlineCamps,
    });
  } catch (error) {
    next(error);
  }
};
