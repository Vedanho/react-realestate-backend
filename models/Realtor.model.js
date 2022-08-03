const mongoose = require("mongoose");

const realtorSchema = mongoose.Schema({
  email: String,
  login: String,
  password: String,
  rating: [
    {
      rate: Number,
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    },
  ],
  reviews: [
    {
      review: String,
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    },
  ],
  image: String,
  name: String,
  phoneNumber: String,
  description: String,
  experience: String,
  officeHours: String,
  officeAdress: String,
  socialNetworks: String,
});

const Realtor = mongoose.model("Realtor", realtorSchema);
module.exports = Realtor;
