const mongoose = require("mongoose");

const apartmentSchema = mongoose.Schema({
  price: Number,
  location: String,
  description: String,
  image: String,
  yearOfBuilt: Date,
  size: Number,
  dateOfDownload: Date,
  garage: Number,
  bathroom: Number,
  bedroom: Number,
  reviews: [
    {
      text: String,
      user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId,
      },
    },
  ],
  realtor: {
    ref: "Realtor",
    type: mongoose.SchemaTypes.ObjectId,
  },

  status: {
    type: String,
    enum: ["Rent", "Sale"],
  },
  house: {
    floor: Number,
    gym: Boolean,
  },
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
