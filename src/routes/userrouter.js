const { Router, application } = require("express");
const router = Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getUsers);
router.post("/login", UserController.verifyUser);
router.post("/adduser", UserController.addUser);
router.put("/", UserController.updateUser);
router.delete("/:iduser", UserController.deleteUser);

// app.get("/user", (req, res) => {
//   const user_id = req.query.id;
//   const token = req.query.token;
//   const geo = req.query.geo;
//   res.send({
//     user_id: user_id,
//     token: token,
//     geo: geo,
//   });
// });
module.exports = router;
