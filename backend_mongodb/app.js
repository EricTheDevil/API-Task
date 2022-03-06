const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.listen(3000);
