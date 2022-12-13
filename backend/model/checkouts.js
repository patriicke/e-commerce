const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  cart: {
    type: Array,
    require: true
  }
});

module.exports = mongoose.model("checkout", CheckoutSchema);
