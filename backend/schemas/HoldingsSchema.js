const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  net: String,
  price: Number,
  day: String,
});

module.exports = { HoldingsSchema };
