const express = require("express");
const app = express()

app.get("/", (req, res) => {
  res.send(`Response B. NODE_ENV: "${process.env.NODE_ENV}"`);
});

app.listen(3000, () => { console.log("App started"); });
