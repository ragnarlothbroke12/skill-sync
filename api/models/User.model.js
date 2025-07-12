// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "project-manager", "team-member", "freelancer"],
      default: "team-member",
    },
    skills: [
      {
        type: String,
      },
    ],
    availability: {
      type: Boolean,
      default: true,
    },
    performance: {
      communication: { type: Number, default: 0 },
      reliability: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
