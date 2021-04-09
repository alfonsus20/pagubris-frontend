import React from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import logo from "../../assets/pictures/logo.svg";
import { useLocation } from "react-router-dom";

const Navbar = ({ list }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div
        style={{ padding: "1rem 7%", maxWidth: 1600 }}
        className={`z-20 fixed flex flex-col lg:flex-row bg-white w-full`}
      >
        <NavLogo
          image={logo}
          imageTitle="logo pagubris"
        />
        <NavList
          list={
            pathname === "/" || pathname === "/login" || pathname === "/signup"
              ? list[0]
              : list[1]
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
