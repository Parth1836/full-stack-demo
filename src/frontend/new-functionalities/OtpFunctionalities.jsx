import React, { useState } from "react";
import { sendOTP } from "../../server/services/otp-verification/optVerification";

const OtpFunctionalities = () => {
  const [number, setNumber] = useState("");
  const sendOTP = async () => {
    const optApiData = await axios.post("/api/send-otp", {
      userNumber: number,
    });
    console.log("optApiData data", optApiData);
  };
  return (
    <>
    <h1>Please enter your number for user verification!</h1>
      <input type="text" value={number} />
      <br />
      <button onClick={sendOTP}>Send OTP</button>
    </>
  );
};

export default OtpFunctionalities;
