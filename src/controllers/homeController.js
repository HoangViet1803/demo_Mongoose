const User = require("../models/user.model");
const getHomePage = async (req, res) => {
  let result = await User.find({});
  return res.render("home.ejs", { listUsers: result });
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.username;
  let city = req.body.city;
  await User.create({ email, name, city });
  res.redirect("/");
};
const getCreateUserPage = async (req, res) => {
  res.render("createUSer");
};
const getUpdatePage = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).exec();
  res.render("edit", { userEdit: user });
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.username;
  let city = req.body.city;
  let userId = req.body.userId;
  const opts = { runValidators: true };
  const update = { name: name, email: email, city: city };
  await User.updateOne({ _id: userId }, update, opts);
  res.redirect("/");
};
const getDeleteUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id).exec();
  res.render("deleteUser", { userEdit: user });
};
const deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await User.deleteOne({ _id: userId }).exec();
  res.redirect("/");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreateUserPage,
  getUpdatePage,
  postUpdateUser,
  getDeleteUser,
  deleteUser,
};
