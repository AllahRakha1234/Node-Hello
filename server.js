const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to your basic Express server!");
});

// Hello endpoint
app.get("/hello", (req, res) => {
  res.send("Hello from your EC2 server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
