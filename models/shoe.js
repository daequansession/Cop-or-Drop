const db = require("../db/connnection.js");
const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  brand: String,
  model: String,
  colorway: String,
  release_year: Number,
  retail_price: Number,
  purchase_link: String,
  description: String,
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
