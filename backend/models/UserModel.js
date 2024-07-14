const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    require: [true, "your username is required"],
  },
  password: {
    type: String,
    require: [true, "your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("user", userSchema);
