const { Router } = require("express");

const { bookingController } = require("../controllers/bookings.controller");

const router = Router();

router.get("/bookings", bookingController.getBookings);
router.post("/bookings", bookingController.createBookings);
router.patch("/bookings/:id", bookingController.updateBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);
router.get("/bookings/:id", bookingController.getBookingById);

module.exports = router;
