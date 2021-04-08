import React, { useEffect } from "react";
import Container from "./Container";
import Sidebar from "./Sidebar";
import useWindowDimensions from "../utils/window-dimension";
import { useDispatch , useSelector} from "react-redux";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SIDEBAR_LOADING } from "../constants/sidebarConstants";

const PageWithSidebar = ({ background, children }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const {open} = useSelector(state => state.sidebar);

  useEffect(() => {
    if (width > 768) {
      dispatch({ type:SIDEBAR_LOADING });
      dispatch({ type:SIDEBAR_OPEN });
    } else {
      dispatch({ type:SIDEBAR_LOADING });
      dispatch({ type:SIDEBAR_CLOSE });
    }
  }, [width]);

  return (
    <div className="relative">
      {/* <Sidebar /> */}
      <div className = {`${(!open || width > 768) && 'hidden'} overlay h-full w-full absolute bg-black z-10 opacity-20`}></div>
      <div className="pt-24 relative left-96 px-12 beside-sidebar">{children}</div>
    </div>
  );
};

PageWithSidebar.defaultProps = {
  background: true,
};

export default PageWithSidebar;
