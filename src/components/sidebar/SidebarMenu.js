import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../actions/sidebarActions";
import { logout } from "../../actions/userActions";

const SidebarMenu = ({ list }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="text-xl font-bold mt-8">Menu</h3>
      <ul>
        {list.map((x, id) => {
          if (x.name === "Logout") {
            return (
              <li
                key={id}
                className="w-full p-2 my-4 rounded-r-full font-semibold"
                style={{ color: "#606060" }}
              >
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(logout());
                    dispatch(toggleSidebar());
                  }}
                  className="flex flex-row items-center"
                >
                  <div className="w-2/12">
                    <i className={x.icon}></i>
                  </div>
                  <div className="w-10/12">{x.name}</div>
                </Link>
              </li>
            );
          }
          return (
            <li
              className="w-full p-2 my-4 rounded-r-full font-semibold"
              style={{ color: "#606060" }}
              key={id}
            >
              <Link
                to={x.link}
                onClick={() => dispatch(toggleSidebar())}
                className="flex flex-row items-center"
              >
                <div className="w-2/12">
                  <i className={x.icon}></i>
                </div>
                <div className="w-10/12">{x.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SidebarMenu;