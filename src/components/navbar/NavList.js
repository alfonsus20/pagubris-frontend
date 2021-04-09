import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";

const NavList = ({ list, menuVisible, mobile, setMenuVisible }) => {
  const dispatch = useDispatch();

  return (
    <ul
      className={`list-none "relative"
       hidden lg:flex flex-col lg:flex-row mx-auto lg:ml-auto lg:mr-0 justify-around w-6/12 text-center`}
    >
      {list.map((navItem, id) => {
        if (navItem.name === "Login") {
          return (
            <li
              key={id}
              className="py-4 px-2 text-lg"
            >
              <Link
                to={navItem.link}
                className="linimasa px-8 py-2 text-white font-bold rounded-full"
              >
                {navItem.name}
              </Link>
            </li>
          );
        } else if (navItem.name === "Logout") {
          return (
            <li
              key={id}
              className="py-4 px-2 text-lg cursor-pointer"
              onClick={() => {
                dispatch(logout());
              }}
            >
              {navItem.name}
            </li>
          );
        } else {
          return (
            <li
              key={id}
              className="py-4 px-2 text-lg"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default NavList;
