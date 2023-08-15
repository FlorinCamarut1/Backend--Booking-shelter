const { Router, application } = require("express");
const router = Router();
const BookingController = require("../controllers/BookingController");
router.post("/book", BookingController.addBooking);
router.get("/getBookings", BookingController.getBookings);

module.exports = router;
