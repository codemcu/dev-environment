const express = require("express");
const path = require("path");
const open = require("open");

const app = express();
const port = 8081;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, () => {
  open("http://localhost:8081");
  console.log(`listening in port ${port}`);
});
