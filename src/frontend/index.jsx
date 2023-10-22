import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux-store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const [userSession, setUserSession] = useState({name:"Parth Vaishnani", isLogged:true});
const userSession = "Parth";
console.log("root", document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    {/* <SessionContext.Provider value={{userSession}}>     */}
    <App />
    {/* </SessionContext.Provider> */}
    </Provider>
  // </React.StrictMode>
);
