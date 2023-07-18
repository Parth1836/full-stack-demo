// server/index.js
const express = require("express");

const PORT = process.env.PORT || 3001;

const path = require("path");
const app = express();
const routes = require("./src/server/routes");
app.use("/api", routes);
console.log("Hii");

const pub = path.join(__dirname, "public");

app.use(express.static(`${__dirname}/public`));
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
