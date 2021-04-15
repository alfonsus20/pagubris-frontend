import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAIL,
  USER_INFO_RESET,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_RESET,
  LIST_HIGHLIGHTS_REQUEST,
  LIST_HIGHLIGHTS_SUCCESS,
  LIST_HIGHLIGHTS_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  LIST_HIGHLIGHTS_RESET,
} from "../constants/userConstants";
import pagubris from "../api/pagubris";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      data: { access_token, user },
    } = await pagubris.post("/auth/login", { email, password }, config);

    dispatch({ type: LOGIN_SUCCESS });
    setToken(access_token);

    dispatch({ type: USER_INFO_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_UP_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      data: { access_token, user },
    } = await pagubris.post("/auth/register", userData, config);

    dispatch({ type: SIGN_UP_SUCCESS });
    dispatch({ type: LOGIN_SUCCESS });
    setToken(access_token);

    dispatch({ type: USER_INFO_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error.response.data,
    });
  }
};

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({ type: USER_INFO_REQUEST });
    const config = {
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    };
    const { data } = await pagubris.get("/profile", config);
    dispatch({ type: USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_INFO_FAIL, payload: error.response.data });
  }
};

export const editProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PROFILE_REQUEST });
    const config = {
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    };
    const { data } = await pagubris.put("/profile", userData, config);
    dispatch({ type: EDIT_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: EDIT_PROFILE_FAIL, payload: error.response.data });
  }
};

export const listHighlights = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_HIGHLIGHTS_REQUEST });
    const config = {
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    };
    const { data } = await pagubris.get("/highlight", config);
    dispatch({ type: LIST_HIGHLIGHTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIST_HIGHLIGHTS_FAIL, payload: error.response.data });
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_PROFILE_REQUEST });
    const config = {
      headers: {
        Authorization: getToken(),
      },
    };
    const { data } = await pagubris.get(`/users/${userId}`, config);
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_PROFILE_FAIL, payload: error.response.data });
  }
};

export const logout = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: getToken(),
    },
  };
  await pagubris.post("/auth/logout", {}, config);
  dispatch({ type: LOGOUT });
  dispatch({ type: USER_INFO_RESET });
  removeToken();
};

export const setToken = (token) => {
  localStorage.setItem("token", `Bearer ${token}`);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};
