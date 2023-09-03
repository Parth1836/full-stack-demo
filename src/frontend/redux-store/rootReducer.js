import { combineReducers } from "redux";
import storeCSData  from "./slices/customerSolutionSlice";
import updateSubmitted from "./slices/customerSolutionSlice";
import updateAge from "./slices/ageSlice";


const rootReducer = combineReducers({
    customerSolution: storeCSData,
    submittedFlag: updateSubmitted,
    userAge:updateAge,
});

export default rootReducer;