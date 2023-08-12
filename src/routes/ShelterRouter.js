const { Router, application } = require("express");
const router = Router();
const ShelterController = require("../controllers/ShelterController");

router.get("/getShelters", ShelterController.getShelters);

module.exports = router;
