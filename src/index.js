import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./src/App";
console.log("root", document.getElementById("root"));
const root = ReactDOM;
ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,

  document.getElementById("app")
);

