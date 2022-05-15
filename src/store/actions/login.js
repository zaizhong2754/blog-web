import md5 from "md5";
import { LOGIN } from "../constants";

export const login = (payload) => {
  return async (dispatch) => {
    const userInfo = md5(payload);
    if (userInfo === "84f081a47efed5ef5d4caa159c9c6972") {
      dispatch({
        type: LOGIN,
        payload: userInfo,
      });
    }
  };
};
