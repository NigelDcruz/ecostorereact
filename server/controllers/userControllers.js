const User = require("../models/User");

/*
DELETE a user (by id)
not using this anywhere yet, unless we want to have a user delete there own profile
just testing for now
*/

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

//needs authentication
const getUserbyId = async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
  }
};

//needs authentication, this is for the registration page
const createUser = async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.json(userData);
  } catch (error) {
    console.error(error);
  }
};

//needs authentication, this is for the users profile page
const updateUser = async (req, res) => {
  try {
    const newUserData = await User.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!newUserData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(newUserData);
  } catch (error) {
    console.error(error);
  }
};

//authentication needed, this is if a user wants to delete their profile.
//if we want to implement this feature we would need to be able to delete their orders as well.
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params._id);
  if(!deleteUser) {
    return res.status(404).json({ message: 'No user with this id!'});
  }
  res.json('User successfully deleted!')
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
};
