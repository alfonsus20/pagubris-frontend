import React, { useEffect } from "react";
import useWindowDimensions from "../utils/window-dimension";
import { useDispatch, useSelector } from "react-redux";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_LOADING,
} from "../constants/sidebarConstants";
import { useLocation } from "react-router-dom";

const Overlay = ({ ...rest }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.sidebar);
  const location = useLocation();

  useEffect(() => {
    if (width > 768) {
      dispatch({ type: SIDEBAR_LOADING });
      dispatch({ type: SIDEBAR_OPEN });
    } else {
      dispatch({ type: SIDEBAR_LOADING });
      dispatch({ type: SIDEBAR_CLOSE });
    }
  }, [width, dispatch]);

  return (
    <div
      className={`${
        (!open || width > 768) && "hidden"
      } overlay  w-full absolute bg-black z-10 opacity-20 ${
        location.pathname.startsWith("/pesan/") ? "h-screen" : "h-full"
      }`}
      {...rest}
    ></div>
  );
};

export default Overlay;
