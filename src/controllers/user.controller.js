const { userService, emailService } = require("../services");

/** Create User controller */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    const userExists = await userService.createUser(reqBody);
    if (!userExists) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: userExists,
    });
  } catch (error) {
    res.status(error.status || 400).json({
      success: false,
      message: error.message || "Something went wrong!",
      stack: error.stack,
    });
  }
};

/** Get User list  controller */
const getUserList = async (req, res) => {
  try {
    const getlist = await userService.getUserList();
    res.status(200).json({
      success: true,
      message: "Get user successfully!",
      data: getlist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Get User by Id controller */
const getUserById = async (req, res) => {
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
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** User details update by Id controller */
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    userService.updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!",
      data: userExists,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Delete User controller */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    userService.deleteUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Sometbhing went wrong!",
    });
  }
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
  sendMail,
};
