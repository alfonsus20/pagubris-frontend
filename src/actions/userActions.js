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
} from "../constants/userConstants";
import pagubris from "../api/pagubris";
// import axios from "axios";

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
    const { data } = await pagubris.get("/auth/me", config);
    dispatch({ type: USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_INFO_FAIL, payload: error.response.data });
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
