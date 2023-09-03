import React, { useState } from "react";
import "./App.css";
import MainRoutes from "./routes";
import SessionContext from "./context/loginContext";

function App() {
 
  return (
    <div className="App">
      
      <MainRoutes />
     
    </div>
  );
}

export default App;


