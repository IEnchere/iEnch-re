import {
    REGISTER_USER,
  } from "../constants/user-types";
  import axios from "axios";
  
  export const registerUser = (user, history) => async (dispatch) => {
    try {
      const result = await axios.post("/api/user/register", user);
      dispatch({ type: REGISTER_USER, payload: result.data });
      history.push("/");
    } catch (error) {alert(error.response.data.error[0].msg)}
  };
