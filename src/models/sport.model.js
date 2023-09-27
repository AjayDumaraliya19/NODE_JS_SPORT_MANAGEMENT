const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema(
  {
    sport_name: {
      type: String,
      trim: true,
    },
    sport_category: {
      type: String,
      trim: true,
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

const Sport = mongoose.model("sport", sportSchema);

module.exports = Sport;
