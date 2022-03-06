const express = require("express");

const app = express();

// Import Routes
const postsRoute = require("./routes/posts");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("No message");
});

app.listen(3000);
