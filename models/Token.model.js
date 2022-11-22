const mongoose = require("mongoose")

const tokenSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  refreshToken: {
    type: String,
    required: true,
  },
})

const Token = mongoose.model("Token", tokenSchema)

module.exports = Token
