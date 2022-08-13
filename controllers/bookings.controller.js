const Booking = require("../models/Booking.model");

module.exports.bookingController = {
  getBookings: async (req, res) => {
    try {
      const bookings = await Booking.find()
        .populate({ path: "booking.user" })
        .populate({ path: "booking.realtor" })
        .populate({ path: "booking.apartment" });
      res.json(bookings);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  createBookings: async (req, res) => {
    try {
      const bookings = await Booking.create({
        time: req.body.time,
        user: req.body.user,
        realtor: req.body.realtor,
        apartment: req.body.apartment,
      });
      res.json(bookings);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  updateBooking: async (req, res) => {
    try {
      const bookings = await Booking.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(bookings);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  deleteBooking: async (req, res) => {
    try {
      const bookings = await Booking.findByIdAndRemove(req.params.id);
      res.json(bookings);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  getBookingById: async (req, res) => {
    try {
      const bookings = await Booking.find(req.params.id)
        .populate({ path: "booking.user" })
        .populate({ path: "booking.realtor" })
        .populate({ path: "booking.apartment" });
      res.json(bookings);
    } catch (error) {
      return res.status(401).json(error.toString());
    }
  },
};
