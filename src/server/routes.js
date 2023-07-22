const express = require("express");
const router = express.Router();


const routes = [require("./services/user/user"),
require("./services/customer/customer"),
require("./services/customer-solution/customerSolutionRoute")];

router.use("/", routes);
module.exports = router;

