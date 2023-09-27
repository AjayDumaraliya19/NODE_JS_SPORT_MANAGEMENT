const { bannerService, userService } = require("../services");
const { updateBanner } = require("../validations/banner.validation");

/** Create Banner Controller */
const createBanner = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.banner_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }

    const banner = await bannerService.createBanner(reqBody);

    res.status(200).json({
      success: true,
      message: "Image create successfully!",
      data: banner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message: error?.message || "Something went wrong!",
    });
  }
};

/** Get Banner By Id details */
const getBannerById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: userExists,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Somthing went wrong, please try again or leter!",
    });
  }
};

/** Get Banner list */
const getBannerList = async (req, res) => {
  try {
    const getList = await bannerService.getBannerList();

    res.status(200).json({
      success: true,
      message: "Get banner successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or leter!",
    });
  }
};

/** Update Bnaner details */
const updataBanner = async (req, res) => {
  try {
    const reqBody = req.body;
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    if (req.file) {
      reqBody.banner_image = req.file.filename;
    }

    const updataBanner = await userService.updateUser(userId, reqBody);
    if (updateBanner) {
      if (req.file) {
        const filePath = `./public/banner_image/${userExists.banner_image}`;
        
      }
    }
  } catch (error) {}
};

module.exports = {
  createBanner,
};
