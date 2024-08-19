const express = require("express");
const app = express()
const fs = require("node:fs");

app.get("/", (req, res) => {
  const ugly = fs.readFileSync("ugly.js");
  res.send(`Response A, code block 2. NODE_ENV: "${process.env.NODE_ENV}". gulped code: ${ugly}`);
});

app.listen(3000, () => { console.log("App started"); });
