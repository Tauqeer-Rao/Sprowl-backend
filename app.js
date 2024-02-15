require('dotenv').config();
var express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {MONGO_URI} = require('./config/config')
const port = process.env.PORT; 

const router = require("./routes/route");

var app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to the database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
