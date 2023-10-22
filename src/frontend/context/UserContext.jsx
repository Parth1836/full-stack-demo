import { createContext, useContext } from "react";

export const SessionContext = createContext(null);
const userSession = () => useContext(SessionContext)
export default userSession;