const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phone_no: {
      type: Number,
    },
    specifiaction: {
      type: String,
      trim: true,
    },
    coach: {
      type: mongoose.Types.ObjectId,
      ref: "coach",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Player = mongoose.model("player", playerSchema);

module.exports = Player;
