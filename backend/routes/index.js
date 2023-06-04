const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const projectRouter = require("./project");
const educationRouter = require("./education");
const categoryRouter = require("./category");

router.use(userRouter);
router.use(projectRouter);
router.use(educationRouter);
router.use(categoryRouter);

module.exports = router;
