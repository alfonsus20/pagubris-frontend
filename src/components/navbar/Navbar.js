import React, { useState, useEffect } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import logo from "../../assets/pictures/logo.svg";
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../utils/window-dimension";

const Navbar = ({ list }) => {
  const large = useWindowDimensions().width > 1023;
  const { pathname } = useLocation();
  const [menuVisible, setMenuVisible] = useState(large);

  return (
    <div >
      <div
        style={{ padding: "1% 7%", maxWidth: 1600}}
        className={`z-10 fixed flex flex-col lg:flex-row bg-white w-full`}
      >
        <NavLogo
          image={logo}
          imageTitle="logo pagubris"
          menuVisible={menuVisible}
          setMenuVisible={setMenuVisible}
        />

        {large ? (
          <NavList
            list={
              pathname == "/" || pathname == "/login" || pathname == "/signup"
                ? list[0]
                : list[1]
            }
            menuVisible={true}
            setMenuVisible={setMenuVisible}
            mobile = {false}
          />
        ) : (
          <NavList
            list={
              pathname == "/" || pathname == "/login" || pathname == "/signup"
                ? list[0]
                : list[1]
            }
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
            mobile={true}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
