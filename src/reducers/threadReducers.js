import {
  POST_THREAD_REQUEST,
  POST_THREAD_SUCCESS,
  POST_THREAD_FAIL,
  LIST_THREAD_REQUEST,
  LIST_THREAD_SUCCESS,
  LIST_THREAD_FAIL,
  LIST_THREAD_RESET,
  LIST_CATEGORY_REQUEST,
  LIST_CATEGORY_SUCCESS,
  LIST_CATEGORY_FAIL,
  LIST_THREAD_ANSWERS_REQUEST,
  LIST_THREAD_ANSWERS_SUCCESS,
  LIST_THREAD_ANSWERS_FAIL,
  LIST_THREAD_INNER_ANSWERS_REQUEST,
  LIST_THREAD_INNER_ANSWERS_SUCCESS,
  LIST_THREAD_INNER_ANSWERS_FAIL,
  ANSWER_THREAD_REQUEST,
  ANSWER_THREAD_SUCCESS,
  ANSWER_THREAD_FAIL,
  ANSWER_THREAD_RESET,
} from "../constants/threadConstants";

export const postThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_THREAD_REQUEST:
      return { loading: true };
    case POST_THREAD_SUCCESS:
      return { loading: false, success: true, threadInfo: action.payload };
    case POST_THREAD_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listThreadsReducer = (state = { threads: [] }, action) => {
  switch (action.type) {
    case LIST_THREAD_REQUEST:
      return { loading: true };
    case LIST_THREAD_SUCCESS:
      return { loading: false, success: true, threads: action.payload };
    case LIST_THREAD_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case LIST_THREAD_RESET:
      return {
        threads: [],
      };
    default:
      return state;
  }
};

export const listCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case LIST_CATEGORY_REQUEST:
      return { loading: true };
    case LIST_CATEGORY_SUCCESS:
      return { loading: false, success: true, categories: action.payload };
    case LIST_CATEGORY_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listThreadAnswersReducer = (state = { answers: [] }, action) => {
  switch (action.type) {
    case LIST_THREAD_ANSWERS_REQUEST:
      return { loading: true };
    case LIST_THREAD_ANSWERS_SUCCESS:
      return { loading: false, success: true, answers: action.payload };
    case LIST_THREAD_ANSWERS_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const answerThreadReducer = (state = { answer: {} }, action) => {
  switch (action.type) {
    case ANSWER_THREAD_REQUEST:
      return { loading: true };
    case ANSWER_THREAD_SUCCESS:
      return { loading: false, success: true, answer: action.payload };
    case ANSWER_THREAD_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case ANSWER_THREAD_RESET:
      return {};
    default:
      return state;
  }
};


export const listThreadInnerAnswersReducer = (state = { answers: [] }, action) => {
  switch (action.type) {
    case LIST_THREAD_INNER_ANSWERS_REQUEST:
      return { loading: true };
    case LIST_THREAD_INNER_ANSWERS_SUCCESS:
      return { loading: false, success: true, answers: action.payload };
    case LIST_THREAD_INNER_ANSWERS_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



