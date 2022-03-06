const express = require("express");
const router = express.Router();

let data = [{ message: "Ping" }];

// GET
router.get("/", (req, res) => {
  res.send(data);
});
//
router.post("/", (req, res) => {
  let postData = req.body;
  if (postData.message === "Ping") data = [{ message: "Pong" }];
  res.send(data);
});

module.exports = router;
