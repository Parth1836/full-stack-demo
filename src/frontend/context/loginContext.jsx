import { createContext, useContext } from "react";

const loginContext = createContext(null);
const userSession = () => useContext(loginContext)
export default userSession;