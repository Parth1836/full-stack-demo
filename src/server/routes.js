// server/index.js

const express = require("express");
const router = express.Router();
console.log("first");
const routes = [require("./services/user/user")];

router.use("/", routes);

module.exports = router;

