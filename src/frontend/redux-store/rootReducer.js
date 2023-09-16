import { combineReducers } from "redux";
import customerSlice   from "./slices/customerSolutionSlice";
import userSlice from "./slices/userSlice";
import ageSlice from "./slices/ageSlice";


const rootReducer = combineReducers({
    customerSolution: customerSlice,
    ageData: ageSlice,
    users: userSlice,
});

export default rootReducer;