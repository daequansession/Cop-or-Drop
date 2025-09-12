const db = require("../db/connection.js");
const Shoe = require("../models/shoe.js");
const sneakers = require("./sneakers.js");

const insertData = async () => {
  db.dropCollection("shoes");

  await Shoe.create(sneakers);
  console.log("Shoes created!");

  db.close();
};

insertData();
