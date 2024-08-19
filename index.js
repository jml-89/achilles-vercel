const express = require("express");

const app = express()

app.get("/", (req, res) => {
  res.send("Response A, code block 1");
});

app.listen(3000, () => { console.log("App started"); });
