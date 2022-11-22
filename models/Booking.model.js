const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  time: String,
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  realtor: {
    ref: "Realtor",
    type: mongoose.SchemaTypes.ObjectId,
  },
  apartment: {
    ref: "Apartment",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
