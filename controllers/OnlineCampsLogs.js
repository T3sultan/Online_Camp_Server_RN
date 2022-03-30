const OnlineCampLogs = require("../models/OnlineCampLogs");

exports.createOnlineCampLogs = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const onlineCampLogs = OnlineCampLogs.create(req.body);
    res.status(200).json({
      success: true,
      data: onlineCampLogs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
