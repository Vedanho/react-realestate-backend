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
  lastname: String,
  phone: String,
  role: {
    type: String, 
    default: "user",
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User
