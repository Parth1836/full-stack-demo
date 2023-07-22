const express = require("express");
const router = express.Router();

const CustomerSolutionController = require("./customerSolutionController");

const customerSolutionController = new CustomerSolutionController();

router.get("/getAllCS", customerSolutionController.getAllCS)
router.post("/create-cs", customerSolutionController.createCS)

module.exports = router;