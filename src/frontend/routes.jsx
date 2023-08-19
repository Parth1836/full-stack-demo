import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomHooks from "./CustomHook";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />{" "} 
        <Route exact path="/dashboard" element={<Dashboard />} />{" "}
        <Route
          exact
          path="/custom-hooks"
          element={<CustomHooks />}
        />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default MainRoutes;
