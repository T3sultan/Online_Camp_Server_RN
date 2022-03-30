const mongoose = require("mongoose");

const OnlineCampLogsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  onlineCamp: {
    type: mongoose.Schema.ObjectId,
    ref: "OnlineCamp",
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("OnlineCampLogs", OnlineCampLogsSchema);
