import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  console.log("app function");
  //const loadMasterData = async () => {
  // const data = await Axios.get("/user");
  // console.log("data", data);
  // };
  // useEffect(() => {
  //   loadMasterData();
  // }, []);
  function Login() {
    return "Hi U addhd";
  }
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;


