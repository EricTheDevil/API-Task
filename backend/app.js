const express = require("express");

const app = express();

// allow CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Import Routes
const postsRoute = require("./routes/posts");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("No message");
});

app.listen(3001);
