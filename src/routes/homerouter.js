const { Router } = require("express");
const app = Router();
app.get("/", (req, res) => {
  res.send("salut");
});
app.post("/", (req, res) => {
  console.log(req?.body);
  res.send(req.body.adress);
});
app.delete("/", (req, res) => {
  console.log(req?.body);
  res.send(req.body.name);
});
app.put("/", (req, res) => {
  console.log(req?.body);
  res.send(req.body);
});

module.exports = app;
