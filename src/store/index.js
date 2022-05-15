import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { getToken } from "@/utils/token";

const middlewares = composeWithDevTools(applyMiddleware(thunk));
// createStore三个参数
// 参数1：reducer
// 参数2：可选的对象，可以用于提供初始值
// 参数3：提供中间件
const store = createStore(
  rootReducer,
  {
    login: {
      token: getToken(),
    },
  },
  middlewares
);

export default store;
