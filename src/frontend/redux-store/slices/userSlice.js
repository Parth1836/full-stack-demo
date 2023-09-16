import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    usersList: [],
  },
  reducers: {
    setUsers: (state, action) => {
      console.log("fetch users");
      state.usersList = action.payload;
    },
  },
});

export const getAllUsersFromAPI = () => {
  return async (dispatch) => {
    dispatch(setUsers());
    //   dispatch({type: "userSlice/fetchUsers"});
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("users list", data);
    dispatch(setUsers(data));
    // dispatch({type: "userSlice/fetchUsers", payload: data});
  };
};

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
