import {
  POST_THREAD_REQUEST,
  POST_THREAD_SUCCESS,
  POST_THREAD_FAIL,
  LIST_THREAD_REQUEST,
  LIST_THREAD_SUCCESS,
  LIST_THREAD_FAIL,
  LIST_THREAD_RESET,
} from "../constants/threadConstants";
import { getToken } from "./userActions";
import pagubris from "../api/pagubris";

export const postThread = (content) => async (dispatch) => {
  try {
    dispatch({ type: POST_THREAD_REQUEST });

    const config = {
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    };

    const { data } = await pagubris.post("/feeds", { content }, config);

    dispatch({ type: POST_THREAD_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: POST_THREAD_FAIL, payload: e.response.data });
    console.log(e.response.data);
  }
};

export const listThreads = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_THREAD_REQUEST });

    const config = {
      headers: {
        Authorization: getToken(),
      },
    };

    const { data } = await pagubris.get("/feeds", config);

    dispatch({ type: LIST_THREAD_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LIST_THREAD_FAIL, payload: e.response.data });
    console.log(e.response.data);
  }
};
