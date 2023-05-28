const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World my name is Ruly");
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
