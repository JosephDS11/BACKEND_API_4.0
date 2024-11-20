const router = require("express").Router();

const reviewController = require("../controllers/reviewController");

router.route("./review").post((req, res) => reviewController.create(req,res)); 

router.route("./review").get((req, res) => reviewController.getAll(req,res)); 

module.exports = router;