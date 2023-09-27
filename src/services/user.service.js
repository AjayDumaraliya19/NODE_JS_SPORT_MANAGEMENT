const { User } = require("../models");

/** Create User service */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/** Get User list service */
const getUserList = async () => {
  return User.find();
};

/** Get user by Email service */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/** Get User by Id service */
const getUserById = async (userId) => {
  return User.findById(userId);
};

/** User detials update by Id service */
const updateUser = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/** Delete User service */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
};
