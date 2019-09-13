// External Dependancies
const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  address: String,
  symbol: String,
  name: String,
  supply: Number,
  owner: String
});

module.exports = mongoose.model("Token", tokenSchema);
