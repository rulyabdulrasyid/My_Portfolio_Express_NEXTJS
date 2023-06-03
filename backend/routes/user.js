const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.get("/users", UserController.getAll);
router.put("/users/:id", UserController.update);

module.exports = router;
