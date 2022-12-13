const mongoose = require("mongoose");
require("dotenv").config();
module.exports = mongoose
  .connect(
    process.env.NODE_ENV === "development"
      ? process.env.DB_LOCALHOST_URL
      : process.env.DB_URL
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Database failed to connect");
  });
