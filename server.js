const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const auth = require("./routes/auth");
const onlineCamp = require("./routes/OnlineCamp");
const onlineCampLogs = require("./routes/OnlineCampLogs");
const connectDB = require("./config/db");
//load the config
dotenv.config({ path: "./config/config.env" });

//connect to db
connectDB();

const app = express();
//body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//mount all routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/onlineCamps", onlineCamp);
app.use("/api/v1/onlineCampLogs", onlineCampLogs);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Connected from express backend");
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
