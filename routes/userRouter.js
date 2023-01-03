const express = require("express");
const { loginUser, getUsers, getUser, createUser } = require("../controllers/userController");

const router = express.Router();

router
  .post("/login", loginUser)
  .get("/users", getUsers)
  .get("/users/:id", getUser)
  .post("/users", createUser)
  .put("/users/:id", () => {})
  .delete("/users/:id", () => {});

exports.userRoutes = router;
