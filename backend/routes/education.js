const express = require("express");
const router = express.Router();
const EducationController = require("../controllers/educationController");

router.get("/educations", EducationController.getAll);
router.get("/educations/:id", EducationController.getById);
router.post("/educations/create", EducationController.create);
router.put("/educations/:id", EducationController.update);
router.delete("/educations/:id", EducationController.delete);

module.exports = router;
