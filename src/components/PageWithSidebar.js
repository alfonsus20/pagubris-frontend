import React, { useEffect } from "react";
import useWindowDimensions from "../utils/window-dimension";
import { useDispatch } from "react-redux";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_LOADING,
} from "../constants/sidebarConstants";
import Overlay from "./Overlay";

const PageWithSidebar = ({ children }) => {
  const { width } = useWindowDimensions();
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
      <div className="pt-24 relative left-96 px-4 md:px-12 beside-sidebar">
        {children}
      </div>
    </div>
  );
};

PageWithSidebar.defaultProps = {
  background: true,
};

export default PageWithSidebar;