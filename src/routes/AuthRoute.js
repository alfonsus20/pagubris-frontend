import React from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
  const {isAuthenticated} = useSelector(state => state.userInfo);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/linimasa" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;