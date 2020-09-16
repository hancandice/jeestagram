const mongoose = require("mongoose");
const config = require("./index");

const db = mongoose
  .connect(config.mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("An error has occurred", err));

module.exports = db;
