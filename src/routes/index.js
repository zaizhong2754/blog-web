import Login from "@/pages/Login";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { Navigate } from "react-router-dom";
import Log from "@/pages/Home/Log";
const routes = [
  {
    path: "/login", // 登录页
    element: <Login />,
  },
  {
    path: "/home",  // 主页
    element: <Home />,
    children: [
      {
        path: "blog", // 博客
        element: <Navigate to="/home" />,
      },
      {
        path: "log",  // 日志
        element: <Log />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",  // 404
    element: <NotFound />,
  },
];

export default routes;
