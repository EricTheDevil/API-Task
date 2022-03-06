const express = require("express");

const router = express.Router();

router.get("/posts", (req, res) => {
  res.send("We are on posts");
});

router.get("/specific", (req, res) => {
  res.send("specific post");
});

module.exports = router;
