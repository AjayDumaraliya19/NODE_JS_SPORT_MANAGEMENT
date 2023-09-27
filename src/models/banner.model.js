const mongoose = require("mongoose");
const config = require("../config/config");

const bannerSchema = mongoose.Schema(
  {
    banner_name: {
      type: String,
      trim: true,
    },
    banner_image: {
      type: String,
    },
    banner_dis: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.banner_image) {
          data.banner_image = `${config.base_url}banner_images/${data.banner_image}`;
        }
      },
    },
  }
);

const Banner = mongoose.model("banner", bannerSchema);

module.exports = Banner;
