import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import CustomHooks from "./CustomHook";
import OtpFunctionalities from "./new-functionalities/OtpFunctionalities";
import { StarRatings } from "./css-concepts/StarRatings";
import { TicTacToe } from "./coding-practise/TicTacToe";
import WeatherForeCast from "./coding-practise/WeatherForecast";

const userRole = "admin";

const USER_TYPES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  NORMAL: "normal",
};

function AdminCheck({ children }) {
  console.log(userRole, USER_TYPES.ADMIN);
  if (userRole === USER_TYPES.ADMIN) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h1>You are not authorized to this page!</h1>
      </div>
    );
  }
}

function AdminPage() {
  return (
    <div>
      <h1>This is Admin Page!</h1>
    </div>
  );
}

function EmployeeCheck({ children }) {
  if (userRole === USER_TYPES.EMPLOYEE || userRole === USER_TYPES.ADMIN) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h1>You are not authorized to this page!</h1>
      </div>
    );
  }
}

function EmployeePage() {
  return (
    <div>
      <h1>This is Employee Page!</h1>
    </div>
  );
}

function NormalPage() {
  return (
    <div>
      <h1>This is Employee Page!</h1>
    </div>
  );
}

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />{" "}
        <Route exact path="/dashboard" element={<Dashboard />} />{" "}
        <Route exact path="/custom-hooks" element={<CustomHooks />} />{" "}
        <Route
          exact
          path="/admin"
          element={
            <AdminCheck>
              <AdminPage />
            </AdminCheck>
          }
        />{" "}
        <Route
          exact
          path="/employee"
          element={
            <EmployeeCheck>
              <EmployeePage />
            </EmployeeCheck>
          }
        />{" "}
        <Route exact path="/normal" element={<NormalPage />} />{" "}
        <Route exact path="/send-message" element={<OtpFunctionalities />} />{" "}
        <Route exact path="/star-rating" element={<StarRatings />} />{" "}
        <Route exact path="/tictactoe" element={<TicTacToe />} />{" "}
        <Route exact path="/weather-forecast" element={<WeatherForeCast />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default MainRoutes;
