import React, { useEffect } from "react";
import useWindowDimensions from "../utils/window-dimension";
import { useDispatch } from "react-redux";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_LOADING,
} from "../constants/sidebarConstants";
import Overlay from "./Overlay";
import {useLocation} from "react-router-dom";

const PageWithSidebar = ({ children, bgColor }) => {
  const { width } = useWindowDimensions();
  const location = useLocation();
  const dispatch = useDispatch();
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
    <div className="relative">
      <Overlay />
      <div className={`pt-24 relative left-96 px-4 md:px-12 beside-sidebar chat-panel`}>
        {children}
      </div>
    </div>
  );
};

PageWithSidebar.defaultProps = {
  background: true,
  bgColor : 'white'
};

export default PageWithSidebar;