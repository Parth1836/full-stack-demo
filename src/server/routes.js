const express = require("express");
const router = express.Router();


const routes = [require("./services/user/user"),
require("./services/customer/customer"),
require("./services/customer-solution/customerSolutionRoute"),
// require("./services/otp-verification/optVerification"),
require("./services/mail-sender/sendMail")
];

router.use("/", routes);
module.exports = router;

