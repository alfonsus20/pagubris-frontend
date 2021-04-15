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
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_RESET,
  USER_INFO_RESET,
  LIST_HIGHLIGHTS_REQUEST,
  LIST_HIGHLIGHTS_SUCCESS,
  LIST_HIGHLIGHTS_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_FAIL,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_FAIL,
  LIST_HIGHLIGHTS_RESET,
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
      return { loading: true, ...state };
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

export const userEditProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUEST:
      return { ...state, loading: true };
    case EDIT_PROFILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        success: true,
      };
    case EDIT_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case EDIT_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

export const listHighlightsReducer = (state = { highlights: [] }, action) => {
  switch (action.type) {
    case LIST_HIGHLIGHTS_REQUEST:
      return { loading: true };
    case LIST_HIGHLIGHTS_SUCCESS:
      return { loading: false, success: true, highlights: action.payload };
    case LIST_HIGHLIGHTS_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return { loading: true };
    case GET_USER_PROFILE_SUCCESS:
      return { loading: false, success: true, userProfile: action.payload };
    case GET_USER_PROFILE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const followUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
      return { loading: true };
    case FOLLOW_USER_SUCCESS:
      return { loading: false, success: true };
    case FOLLOW_USER_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const unfollowUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UNFOLLOW_USER_REQUEST:
      return { loading: true };
    case UNFOLLOW_USER_SUCCESS:
      return { loading: false, success: true };
    case UNFOLLOW_USER_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
