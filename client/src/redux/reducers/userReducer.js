import {
    REGISTER_USER,
  } from "../constants/user-types";
  
  const initialState = {
    user: null,
    errors: null,
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_USER:
        localStorage.setItem("jwt", payload.token);
        return { ...state, user: payload.user,};
      default:
        return state;
    }
  };
  
  export default userReducer;