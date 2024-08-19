const express = require("express");
const app = express()

app.get("/", (req, res) => {
  res.send(`Response A, code block 2. NODE_ENV: "${process.env.NODE_ENV}"`);
});

app.listen(3000, () => { console.log("App started"); });
