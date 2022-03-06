require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://onlineCamp:gziSPvW8XLX5Llwz@cluster0.dgqch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    }
  );

  console.log(`Mongo db connected: ${conn.connection.host}`);
};

module.exports = connectDB;

// require("dotenv").config();
// const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URI);
// mongoose.connect("mongodb://localhost:27017/monprojectWee", {
//   useNewUrlParser: "true",
//   useUnifiedTopology: "true",
// });
// mongoose.connection.on("error", err => {
//   console.log("err", err);
// });
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected");
// });
