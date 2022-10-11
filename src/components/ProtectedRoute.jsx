import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from "./Preloader/Preloader";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isLoaded, isLogged } = React.useContext(CurrentUserContext);
  if (!isLoaded) return <Preloader />;
  return (
    <Route>
      {
        isLogged ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRoute