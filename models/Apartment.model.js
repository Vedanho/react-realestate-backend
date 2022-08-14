const mongoose = require("mongoose");

const apartmentSchema = mongoose.Schema({
  name: String,
  price: Number,
  location: String,
  city: String,
  description: String,
  image: [],
  yearOfBuilt: String,
  size: Number,
  dateOfDownload: String,
  garage: Number,
  bathroom: Number,
  bedroom: Number,
  city: String,
  reviews: [
    {
      review: String,
      advantages: String,
      disadvantages: String,
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
