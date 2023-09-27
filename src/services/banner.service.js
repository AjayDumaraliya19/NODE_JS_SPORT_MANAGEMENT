const { Banner } = require("../models");

/** Create Banner service
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBanner = async (reqBody) => {
  return Banner.create(reqBody);
};

/** Get Banner list service
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBannerList = async () => {
  return Banner.find().populate("user");
};

/** Get Banner details service
 * @param {object} userId
 * @returns {Promise<User>}
 */
const getBannerById = async (userId) => {
  return Banner.findOne({ _id: userId })
};

/** Update Banner details by Id
 * @param {ObjectId} userId
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const updateBanner = async (userId, reqBody) => {
  return Banner.findOneAndupdate(
    { _id: userId },
    { $set: reqBody },
    { new: true }
  );
};

/** Manage User status
 * @param {ObjectId} userId
 * @return {Promise<User>}
 */
const manageBannerStatus = async (userId) => {
  const UserExists = await getUserById(userId);
  if (!UserExists) {
    throw new Error("Banner not found!");
  }

  return Banner.findOneAndupdate(
    { _id: userId },
    { $set: { is_active: !UserExists.is_active } },
    { new: true }
  );
};

/** Delte User
 * @param {ObjectId} userId
 * @return {Promise<User>}
 */
const deletBanner = async (userId) => {
  return Banner.findOneAndDelete({ _id: userId });
};

module.exports = {
  createBanner,
  getBannerList,
  getBannerById,
  manageBannerStatus,
  updateBanner,
  deletBanner,
};
