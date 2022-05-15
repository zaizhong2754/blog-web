import { setToken } from "@/utils/token";
import md5 from "md5";
import { LOGIN } from "../constants";


export const login = (payload) => {
  return async (dispatch) => {
    const token = md5(payload);
    if (token === "84f081a47efed5ef5d4caa159c9c6972") {
      // 存储到本地
    setToken(token)
    // redux中存储
      dispatch({
        type: LOGIN,
        payload: token,
      });
    }
  };
};
