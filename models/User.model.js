const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  login: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  activationLink: String,
  avatar: String,
  firstname: String,
  lastname: String,
  phone: String,
  role: {
    type: String, 
    default: "user",
  }
  favorite: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Apartment",
    },
  ],
})

const User = mongoose.model("User", userSchema)

module.exports = User
