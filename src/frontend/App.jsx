import React, { useEffect, useState } from "react";
import "./App.css";
import MainRoutes from "./routes";
import userSession, { SessionContext } from "./context/UserContext";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    if (Object.keys(state).length === 0) {
      setState({
        userSession: {
          id: 1,
          name: "Parth",
        },
      });
    }
  });
  return (
    <div className="App">
      <SessionContext.Provider value={{ state, setState }}>
        <MainRoutes />
      </SessionContext.Provider>
    </div>
  );
}

export default App;
