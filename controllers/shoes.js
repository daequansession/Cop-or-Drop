const express = require("express");
const router = express.Router();
const Shoe = require("../models/shoe.js");
const User = require("../models/user.js");

// GET request to render shoes/index.ejs and pass it all of the shoes from the database
router.get("/", async (req, res) => {
  const shoes = await Shoe.find(); // returns an array of objects, where each object represents a shoe [{}, {}]
  res.render("shoes/index.ejs", { shoes: shoes });
});

router.get("/grails", async (req, res) => {
  const currentUser = await User.findById(req.session.user._id)
    .select("_id username shoes")
    .populate("shoes");
  res.render("shoes/grails.ejs", { shoes: currentUser.shoes });
});

router.get("/:shoeId", async (req, res) => {
  const shoe = await Shoe.findById(req.params.shoeId); // find the individual shoe
  res.render("shoes/show.ejs", { shoe: shoe }); // render the show.ejs page and pass it the shoe
});

router.put("/:shoeId", async (req, res) => {
  const currentUser = await User.findById(req.session.user._id); // Step 1: Find the user so that we can access the "shoes" field
  currentUser.shoes.push(req.params.shoeId); // Step 2: Add shoe id to the user's shoes' array
  await currentUser.save(); // Step 3: Save the updated user document to the Database
  res.redirect("/shoes/grails");
});

router.delete("/:shoeId", async (req, res) => {
  await User.findByIdAndUpdate(req.session.user._id, {
    $pull: { shoes: req.params.shoeId },
  });

  res.redirect("/shoes/grails");
});

module.exports = router;
