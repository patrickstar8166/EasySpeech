require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
//const mongoose = require("mongoose");
//const connectDB = require("./config/connectMongo");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ strict: true }));
app.enable("trust proxy");
app.disable("x-powered-by");
//connectDB();

app.use("/test", require("./routes/test"));

app.use("/", function (req, res) {
  res.json({ error: "endpoint not found" });
});

//mongoose.connection.once("open", () => {
//console.log("Connected to MongoDB");
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
//});
