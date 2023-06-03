const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/projectController");

router.get("/projects", ProductController.getAll);
router.get("/projects/:id", ProductController.getById);
router.post("/projects/create", ProductController.create);
router.put("/projects/:id", ProductController.update);
router.delete("/projects/:id", ProductController.delete);

module.exports = router;
