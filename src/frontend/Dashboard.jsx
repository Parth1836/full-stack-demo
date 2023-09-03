import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomHooks from "./CustomHook";
import Parent from "./pure-component-example/Parent";
import ParentHOC from "./hoc-example/ParentHOC";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCSData,
  updateSubmitted,
} from "./redux-store/slices/customerSolutionSlice";
import TopNavigation from "./layout/header";
import LeftNavigation from "./layout/leftNavigation";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openLeftNav, setOpenLeftNav] = useState(false);
  const [age, setAge] = useState(null);
  const csData = useSelector((state) => state.customerSolution.csData);
  console.log("csData", csData);
  const submittedFlag = useSelector((state) => state.submittedFlag.flag);
  console.log("submittedFlag", submittedFlag);
  const ageValue = useSelector((state) => state.userAge.age);
  console.log("age", age);
  // const {userSession} = userSession();
  // console.log("userSession", userSession);
  const csCreateObj = {
    cs_name: "Test CS from frontend",
    cs_desc: "Hi I am description",
    hub: "Asia",
    country: "India",
    status: 1,
    year: "2024",
    brands: [1, 2],
  };
  const csUpdateObj = {
    cs_id: 5,
    cs_name: "Test CS 5",
    cs_desc: "Description5",
    hub: "Asia",
    country: "China",
    status: 1,
    year: "2024",
    brands: [2, 3],
  };
  const candies = [
    { id: 1, name: "mangoDolly" },
    { id: 2, name: "chocobar" },
  ];
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

  const loadMasterData = async () => {
    // // api with raw query
    // const customerData = await Axios.get("/api/customers");
    // console.log("data", customerData.data.data);

    // api with sequelize query
    //get All CS
    const customerSolution = await axios.get("/api//getAllCS");
    console.log("data", customerSolution.data.data);

    //below dispatch is used when no saga middleware is used
    // dispatch(getCSData(customerSolution.data.data));

    //below dispatch is used when saga middleware is used
    dispatch({ type: "getAllCS" });

    // get CS By Id
    // const csById = await axios.post("/api/getCS", { cs_id: 5 });
    // console.log("data", csById.data.data);
  };

  const createCS = async () => {
    const customerData = await axios.post("/api/create-cs", csCreateObj);
    console.log("create CS data", customerData.data.data);
    loadMasterData();
  };

  const updateCS = async () => {
    const customerData = await axios.post("/api/create-cs", csUpdateObj);
    console.log("create CS data", customerData.data.data);
    loadMasterData();
  };

  const deleteCS = async () => {
    const csId = [10, 11]; //by giving array it will work as multi delete
    const customerData = await axios.post("/api/delete-cs", { cs_id: csId });
    console.log("create CS data", customerData.data.data);
    alert(`CS ID: ${csId} is deleted.`);
    loadMasterData();
  };

  const sendMail = async () => {
    const mailAPI = await axios.post("/api/send-mail", {
      userMail: "abc@gmail.com",
    });
    console.log("create CS data", mailAPI);
  };

  var sayName = () => {
    console.log("World is beautiful");
  };

  var sayOtherName = () => {
    console.log("Need to see whole world.");
  };

  const navigation = (url) => {
    console.log("url", url);
    navigate(url);
  };

  useEffect(() => {
    console.log("hi ");
    loadMasterData();
    // createData({ id: 3, name: "julubar" });
  }, []);
  return (
    <>
      <TopNavigation openLeftNav={openLeftNav} />
      <LeftNavigation openLeftNav={openLeftNav} /> 
      <div className="App">
        This is a full stack, Welcome to my project ! hi !
        <button style={{ display: "block" }} onClick={createCS}>
          Create CS
        </button>
        <button
          style={{ display: "block", marginTop: "5px" }}
          onClick={updateCS}
        >
          Update CS
        </button>
        <button
          style={{ display: "block", marginTop: "5px" }}
          onClick={deleteCS}
        >
          Delete CS
        </button>
        <button
          style={{ display: "block", marginTop: "5px" }}
          onClick={sendMail}
        >
          Send Mail
        </button>
        <button
          style={{ display: "block", marginTop: "5px" }}
          onClick={() => navigate("/custom-hooks")}
        >
          Navigation button
        </button>
        <button
          style={{ display: "block", marginTop: "5px" }}
          onClick={() => dispatch(updateSubmitted(!submittedFlag))}
        >
          Submit button
        </button>
        <h2>Submitted Flag: {submittedFlag.toString()}</h2>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button onClick={() => dispatch({ type: "updateAgeBySaga", age })}>
            Submit Age
          </button>
          <h2>Age: {ageValue}</h2>
        </div>
        {/* <CustomHooks /> */}
        {/* Pure Component starts */}
        {/* <Parent /> */}
        {/* Pure Component ends */}
        {/* HOC Component starts */}
        {/* <ParentHOC /> */}
        {/* HOC Component ends */}
      </div>
    </>
  );
}

export default Dashboard;
