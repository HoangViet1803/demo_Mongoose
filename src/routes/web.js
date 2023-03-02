const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreateUserPage,
  getUpdatePage,
  postUpdateUser,
  getDeleteUser,
  deleteUser,
} = require("../controllers/homeController");
// router.METHOD("/router", handlers)
router.get("/", getHomePage);
router.get("/create", getCreateUserPage);
router.post("/create", postCreateUser);
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
router.get("/delete-user/:id", getDeleteUser);
router.post("/delete-user", deleteUser);
module.exports = router;
