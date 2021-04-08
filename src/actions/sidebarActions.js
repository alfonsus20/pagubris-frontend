import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_LOADING,
} from "../constants/sidebarConstants";

export const toggleSidebar = () => (dispatch, getState) => {
  const {
    sidebar: { open },
  } = getState();
  if (open) {
    dispatch({ type: SIDEBAR_LOADING });
    dispatch({ type: SIDEBAR_CLOSE });
  } else {
    dispatch({ type: SIDEBAR_LOADING });
    dispatch({ type: SIDEBAR_OPEN });
  }
};