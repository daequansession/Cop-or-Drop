const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const express = require("express");
const app = express();
const db = require("./db/connection.js");

const morgan = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");
const passUserToView = require("./middleware/pass-user-to-view.js");
const isSignedIn = require("./middleware/is-signed-in.js");

const authController = require("./controllers/auth.js");
const shoeController = require("./controllers/shoes.js");

const PORT = process.env.PORT || 3000;

// app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Middleware that allows us to attach CSS files
app.use(express.urlencoded({ extended: true })); // Middleware that allows us to get from data in our request object (req.body)
app.use(methodOverride("_method")); // Middleware that allows us to make DELETE and PUT requests (forms normally only allow GET and POST)
app.use(morgan("dev")); // Middleware logger for terminal print out

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passUserToView); // Custom Middleware function that passes the user object to the response object (res.locals)

app.get("/", (req, res) => {
  if (req.session.user) {
    res.redirect("/shoes");
  } else {
    res.render("index.ejs");
  }
});

app.use("/auth", authController);

app.use("/shoes", isSignedIn, shoeController);

db.on("connected", () => {
  // connect to MongoDB database first
  console.clear();
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    // then connects to the Express server
    console.log(`Listening on port ${PORT}`);
  });
});
