import React, { useEffect, useRef, useState } from "react";
import { sendOTP } from "../../server/services/otp-verification/optVerification";
import axios from "axios";

const OtpFunctionalities = () => {
  const [number, setNumber] = useState("");
  const btnRef = useRef();
  const [data, setData] = useState([{company:{name:"hddh"}}]);
  useEffect(() => {
  var btn = document.querySelector("#child")
    btn.addEventListener("click",()=>{
      console.log("button is clicked")
    })
    var btn2 = document.querySelector("#parent")
    btn2.addEventListener("click",()=>{
      console.log("parent is clicked")
    })
    axios.get("https://jsonplaceholder.typicode.com/users").then((users) => {
      console.log("usersdata", users.data);
      setData(users.data);
    });
  },[]);
  const sendOTP = async () => {
    // const optApiData = await axios.post("/api/send-otp", {
    //   userNumber: number,
    // });
    // console.log("optApiData data", optApiData);
  };
  return (
    <>
    <ul>
      {data.map((user) => (
        <h1>{user.company.name}</h1>
      ))}
    </ul>
    <h1>Please enter your number for user verification!</h1>
      <input type="text" value={number} />
      <br />
      <div id="parent" onClick={() => console.log("parent clicked")}>
      <button id="child" ref={btnRef} type="submit" onClick={sendOTP}>Send OTP</button>
      </div>
    </>
  );
};

export default OtpFunctionalities;
