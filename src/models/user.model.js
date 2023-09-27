const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
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
    phone_number: {
      type: Number,
    },
    password: {
      type: String,
      trim: false,
    },
    is_active: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  const salt = bcrypt.genSaltSync(8);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("user", userSchema);
module.exports = User;
