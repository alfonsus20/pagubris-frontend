import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  SIDEBAR_LOADING,
} from "../constants/sidebarConstants";

export const sidebarReducer = (state = {}, action) => {
  switch (action.type) {
    case SIDEBAR_LOADING:
      return { loading: true };
    case SIDEBAR_OPEN:
      return { open: true, loading: false };
    case SIDEBAR_CLOSE:
      return { open: false, loading: false };

    default:
      return state;
  }
};
