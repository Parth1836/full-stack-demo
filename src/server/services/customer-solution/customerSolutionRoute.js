const express = require("express");
const router = express.Router();

const CustomerSolutionController = require("./customerSolutionController");

const customerSolutionController = new CustomerSolutionController();

router.get("/getAllCS", customerSolutionController.getAllCS);
router.post("/getCS",customerSolutionController.getCSById);
router.post("/create-cs", customerSolutionController.createOrUpdateCS);
router.post("/delete-cs", customerSolutionController.deleteCS);

module.exports = router;