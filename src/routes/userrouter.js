const { Router } = require("express");
const app = Router();
app.get("/user", (req, res) => {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;
  res.send({
    user_id: user_id,
    token: token,
    geo: geo,
  });
});
module.exports = app;
