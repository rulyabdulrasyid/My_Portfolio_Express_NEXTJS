const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const projectRouter = require("./project");
const educationRouter = require("./education");

router.use(userRouter);
router.use(projectRouter);
router.use(educationRouter);

module.exports = router;
