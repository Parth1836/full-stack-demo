const express = require("express");

const router = express.Router();
console.log("user");
let candies = [];
const createData = (chocolate) => {
  return new Promise((resolve, reject) => {
    console.log("inside promise");
    if (chocolate) {
      candies.push(chocolate);
      resolve();
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject("There is no more chocolate added");
    }
  });
};
const userApi = async (req, res) => {
  await createData("ffff");
  try {
    res.status(200).send({
      status: "success",
      message: "Welcome to my first node js project",
      data: "Hi Parth, you are selected",
    });
  } catch (error) {
    res.send()({
      status: "error",
      response: error.message,
      data: [],
    });
  }
};
router.get("/user", userApi);

module.exports = router;
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });
