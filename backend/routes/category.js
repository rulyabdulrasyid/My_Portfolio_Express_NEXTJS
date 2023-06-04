const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController");

router.get("/categories", CategoryController.getAll);
router.get("/categories/:id", CategoryController.getById);
router.post("/categories/create", CategoryController.create);
router.put("/categories/:id", CategoryController.update);
router.delete("/categories/:id", CategoryController.delete);

module.exports = router;
