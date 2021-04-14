import {
  POST_THREAD_REQUEST,
  POST_THREAD_SUCCESS,
  POST_THREAD_FAIL,
  LIST_THREAD_REQUEST,
  LIST_THREAD_SUCCESS,
  LIST_THREAD_FAIL,
  LIST_CATEGORY_REQUEST,
  LIST_CATEGORY_SUCCESS,
  LIST_CATEGORY_FAIL,
  LIST_THREAD_RESET,
} from "../constants/threadConstants";
import { getToken } from "./userActions";
import pagubris from "../api/pagubris";

export const postThread = ({content, id}) => async (dispatch) => {
  try {
    dispatch({ type: POST_THREAD_REQUEST });

    const config = {
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
    };

    const { data } = await pagubris.post("/feeds", { category_id:id, content}, config);

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

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_CATEGORY_REQUEST });

    const config = {
      headers: {
        Authorization: getToken(),
      },
    };

    const { data } = await pagubris.get("/categories", config);

    dispatch({ type: LIST_CATEGORY_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LIST_CATEGORY_FAIL, payload: e.response.data });
  }
};
