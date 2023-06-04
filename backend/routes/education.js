const express = require("express");
const router = express.Router();
const EducationController = require("../controllers/educationController");

router.get("/educations", EducationController.getAll);
router.get("/educations/:id", EducationController.getById);

module.exports = router;
