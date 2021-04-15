import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userSignUpReducer,
  userInfoReducer,
  userEditProfileReducer,
  listHighlightsReducer,
  getUserProfileReducer,
  followUserReducer,
  unfollowUserReducer,
} from "./reducers/userReducers";
import {
  listThreadsReducer,
  postThreadReducer,
  listThreadAnswersReducer,
  listCategoriesReducer,
  answerThreadReducer,
  listThreadInnerAnswersReducer,
  getThreadDetailReducer
} from "./reducers/threadReducers";
import { sidebarReducer } from "./reducers/sidebarReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
  userEditProfile: userEditProfileReducer,
  userInfo: userInfoReducer,
  getUserProfile : getUserProfileReducer,
  listHighlights: listHighlightsReducer,
  followUser : followUserReducer,
  unfollowUser : unfollowUserReducer,
  getThreadDetail : getThreadDetailReducer,
  postThread: postThreadReducer,
  listThreads: listThreadsReducer,
  listThreadAnswers: listThreadAnswersReducer,
  answerThread : answerThreadReducer,
  listThreadInnerAnswers : listThreadInnerAnswersReducer,
  sidebar: sidebarReducer,
  categories: listCategoriesReducer,
});

const isAuthenticated = localStorage.getItem("token") ? true : false;

const initialState = {
  userInfo: { isAuthenticated, userData: {} },
  sidebar: { open: false },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;