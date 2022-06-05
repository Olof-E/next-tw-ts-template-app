const express = require("express");
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Works...");
});

srv.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
