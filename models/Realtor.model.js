const mongoose = require("mongoose");

const realtorSchema = mongoose.Schema({
  email: String,
  login: String,
  password: String,
  rating: [
    {
      rate: Number,
      user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId,
      },
    },
  ],
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
