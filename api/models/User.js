const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
// required: true
// required: true
// required: true

module.exports = mongoose.model("User", UserSchema);
