// server/index.js

const express = require("express");
const router = express.Router();
console.log("first");
const routes = [require("./services/user/user")];

router.use("/", routes);

module.exports = router;

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });router

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
