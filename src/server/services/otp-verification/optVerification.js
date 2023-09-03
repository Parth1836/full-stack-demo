// const express = require("express");
// const router = express.Router();
// const textflow = require("textflow.js");


// textflow.useKey("YOUR_API_KEY");

// router.post("/send-otp", sendOTP);

// async function sendOTP(req, res) {
//   // Providing the custom callback
//   // textflow.sendSMS("+11234567890", "Dummy message text...", (result) => {
//   //     if (result.ok) {
//   //       console.log("SUCCESS");
//   //     }
//   //   })

//   // Awaiting promise inside of async function
//   try {
//     let result = await textflow.sendSMS(
//       "+919904836267",
//       "Dummy message text..."
//     );
//     if (result.ok) {
//       console.log("SUCCESS");
//       res.status(200).send({
//         status: "success",
//         message: "Customer Solution List",
//         data: result,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       status: "error",
//       message: error,
//     });
//   }
// }
// module.exports = router;
