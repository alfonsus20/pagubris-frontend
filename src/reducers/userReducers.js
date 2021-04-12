import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  USER_INFO_SUCCESS,
  USER_INFO_REQUEST,
  USER_INFO_FAIL,
  USER_INFO_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, success: true };
    case LOGIN_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return { loading: true };
    case SIGN_UP_SUCCESS:
      return { loading: false, success: true };
    case SIGN_UP_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const userInfoReducer = (state = { userData: {} }, action) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return { loading: true, ...state};
    case USER_INFO_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        isAuthenticated: true,
      };
    case USER_INFO_FAIL:
      return { loading: false, error: action.payload };
    case USER_INFO_RESET:
      return {};
    default:
      return state;
  }
};
