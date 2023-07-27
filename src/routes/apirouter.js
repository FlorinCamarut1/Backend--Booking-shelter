const { Router } = require("express");
const app = Router();
app.get("/api/:version", (req, res) => {
  res.send(req.param.version);
});

app.param("name", (req, res, next, name) => {
  const modified = name;

  req.name = modified;
  next();
});
app.get("/api/users/:name", function (req, res) {
  res.send("Hello " + req.name + "!");
});
module.exports = app;
