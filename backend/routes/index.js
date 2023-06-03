const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const projectRouter = require("./project");

router.use(userRouter);
router.use(projectRouter);

module.exports = router;
