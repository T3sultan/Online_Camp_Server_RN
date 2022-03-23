const mongoose = require("mongoose");

const OnlineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add the title"],
    unique: true,
    trim: true,
    maxlength: [40, "Name can not be more than 40 letters"],
  },
  description: {
    type: String,
    required: [true, "Please add the description"],
  },
  website: {
    type: String,
    required: [true, "Please add the website"],
  },
  contact: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please give email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  careers: {
    type: String,
    required: true,
  },
  jobReady: {
    type: Boolean,
    default: false,
  },
  isScholarship: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  coverColor: {
    type: Object,
    default: {
      name: "orange",
      code: "#F2994A",
    },
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("OnlineCamp", OnlineSchema);
