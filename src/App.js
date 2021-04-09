import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthRoute from "./routes/AuthRoute";
import { MENU_LIST } from "./utils/constants";
import PrivateRoute from "./routes/PrivateRoute";
import Timeline from "./pages/Timeline";
import PostThread from "./pages/PostThread";
import ViewAnswer from "./pages/ViewAnswer";
import PostAnswer from "./pages/PostAnswer";
import Completed from "./pages/Completed";
import Category from "./pages/Category";
import Sidebar from "./components/sidebar/Sidebar";
import {
  SIDEBAR_LOADING,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from "./constants/sidebarConstants";
import { useDispatch } from "react-redux";
import useWindowDimensions from "./utils/window-dimension";
import { useEffect } from "react";
import Spotlight from "./pages/Spotlight";
import EditProfile from "./pages/EditProfile";
import ViewProfile from "./pages/ViewProfile";

const App = () => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    if (width > 768) {
      dispatch({ type: SIDEBAR_LOADING });
      dispatch({ type: SIDEBAR_OPEN });
    } else {
      dispatch({ type: SIDEBAR_LOADING });
      dispatch({ type: SIDEBAR_CLOSE });
    }
  }, [width, dispatch]);

  return (
    <Router>
      <Navbar list={MENU_LIST} />
      <Sidebar mobile={width <= 768} />
      <Switch>
        <PrivateRoute path="/kategori" component={Category} />
        <PrivateRoute path="/telah-selesai" component={Completed} />
        <PrivateRoute path="/answer" component={ViewAnswer} />
        <PrivateRoute path="/post-answer" component={PostAnswer} />
        <PrivateRoute path="/post-thread" component={PostThread} />
        <PrivateRoute path="/linimasa" component={Timeline} />
        <PrivateRoute path="/lihat-profil" component={ViewProfile} />
        <PrivateRoute path="/edit-profil" component={EditProfile} />
        <PrivateRoute path="/sorotan" component={Spotlight} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
