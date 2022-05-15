import { NavLink, Outlet, useLocation } from "react-router-dom";
import Blog from "@/pages/Home/Blog";

const Home = () => {
  let hash = useLocation();
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="log">
              Log
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        {hash.pathname === "/home/log" ? <Outlet /> : <Blog />}
      </div>
    </div>
  );
};

export default Home;
