import React from "react";
import * as auth from "../utils/auth";

const useAuth = () => {
  const [currentUser, setCurrentUser] = React.useState({
    _id: "",
    name: "",
    email: "",
    isLoaded: false,
    isLogged: false,
  });

  React.useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      auth
      .getUserInfo(token)
      .then((user) => {
        setCurrentUser((currentUser) => ({
          ...currentUser,
          ...user.data,
          isLogged: true,
        }));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoaded(true));
    } else {
      setIsLoaded(true);
    }
  }, [currentUser.isLogged]);

  function setIsLoaded(value) {
    setCurrentUser((currentUser) => ({ ...currentUser, isLoaded: value }));
  }

  function setIsLogged(value) {
    setCurrentUser((currentUser) => ({ ...currentUser, isLogged: value }));
  }

  return [currentUser, setCurrentUser, setIsLoaded, setIsLogged];
};

export default useAuth;
