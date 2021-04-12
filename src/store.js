import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userSignUpReducer,
  userInfoReducer,
} from "./reducers/userReducers";
import {
  listThreadsReducer,
  postThreadReducer,
} from "./reducers/threadReducers";
import { sidebarReducer } from "./reducers/sidebarReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
  userInfo: userInfoReducer,
  postThread: postThreadReducer,
  listThreads: listThreadsReducer,
  sidebar: sidebarReducer,
});

const isAuthenticated = localStorage.getItem("token") ? true : false;

const initialState = {
  userInfo: { isAuthenticated , userData: {} },
  sidebar: { open: false },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
