import React from "react";
export const CurrentUserContext = React.createContext({
  _id: "",
  name: "",
  email: "",
  isLoaded: false,
  isLogged: false,
});
