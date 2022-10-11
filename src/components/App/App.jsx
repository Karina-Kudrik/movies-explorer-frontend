import React from 'react';
import './App.css';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SearchFilterMoviesContext } from "../../contexts/SearchFilterContext";
import ProtectedRoute from '../ProtectedRoute';
import * as auth from "../../utils/auth";
import * as mainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import useMovies from "../../hooks/useMovies";
import useAuth from "../../hooks/useAuth";
import useSavedMovies from "../../hooks/useSavedMovies";

function App() {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser, setIsLoaded, setIsLogged] =
    useAuth(logout);
  const [searchFilterMovies, setSearchFilterMovies] = React.useState({
    name: localStorage.getItem("searchedKeywords") || "",
    isShort: JSON.parse(localStorage.getItem("isShort")) || false,
  });
  const [movies, setMovies, moviesIsLoaded] = useMovies(searchFilterMovies);
  const [savedMovies, setSavedMovies, savedMoviesIsLoaded] = useSavedMovies(
    currentUser,
    searchFilterMovies
  );

  function login(email, password) {
    auth
      .login({email, password})
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLogged(true);
        alert("Авторизация прошла успешно");
        history.push('/movies');
      })
      .catch(() => alert("Был введён неверный email или пароль"))
      .finally(() => setIsLoaded(true));
  }

  function logout() {
    setIsLogged(false);
    setCurrentUser({
      _id: "",
      name: "",
      email: "",
      isLoaded: true,
      isLogged: false,
    });
    setMovies([]);
    setSavedMovies([]);
    localStorage.clear();
    history.push('/');
  }

  function register(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        if (res) {
          history.push('/signin');
        }
      })
      .catch((err) => {
        switch (err) {
          case 400:
            alert("Одно из полей заполнено некорректно");
            break;
          case 409:
            alert("Пользователь с такой почтой уже зарегистрирован");
            break;
          default:
            alert("Что-то пошло не так");
        }
      })
      .finally(() => setIsLoaded(true));
  }

  function handleUpdateProfile(name, email) {
    const token = localStorage.getItem("jwt");
    if (!token) return logout();

    mainApi
      .updateUserInfo(token, name, email)
      .then((user) => {
        setCurrentUser((currentUser) => ({ ...currentUser, ...user }));
        alert("Данные успешно обновлены!");
      })
      .catch(() => alert("Произошла ошибка во время обновления данных"))
      .finally(() => setIsLoaded(true));
  }

  function searchMovie(searchedKeywords) {
    if (!searchedKeywords && location.pathname === "/movies") {
      return alert("Нужно ввести ключевое слово");
    }

    changeSearchedName(searchedKeywords);
  }

  function changeSearchedName(searchedKeywords) {
    setSearchFilterMovies((searchFilterMovies) => ({
      ...searchFilterMovies,
      name: searchedKeywords,
    }));

    localStorage.setItem("searchedKeywords", searchedKeywords);
  }

  function toggleIsShort() {
    setSearchFilterMovies((searchFilterMovies) => ({
      ...searchFilterMovies,
      isShort: !searchFilterMovies.isShort,
    }));
    localStorage.setItem("isShort", !searchFilterMovies.isShort);
  }

  function saveMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((savedMovie) => {
        setSavedMovies((savedMovies) => {
          const filteredMovies = [...savedMovies, savedMovie];
          localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
          alert("Фильм успешно сохранён!");
          return filteredMovies;
        });
      })
      .catch(() => alert("Не удалось получить сохранённые фильмы"));
  }

  function unsaveMovie(id) {
    mainApi
      .deleteMovie(id)
      .then((deletedMovie) => {
        setSavedMovies((savedMovies) => {
          const filteredMovies = savedMovies.filter(
            (movie) => movie._id !== deletedMovie._id
          );
          localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
          alert("Фильм успешно удалён из сохранённых");
          return filteredMovies;
        });
      })
      .catch(() => alert("Не удалось удалить данный фильм"));
  }

  function goBack() {
    history.goBack();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SearchFilterMoviesContext.Provider value={searchFilterMovies}>
        <div className="app">
          <Header />
          <Switch>
            <ProtectedRoute
              exact
              path='/movies'
              component={Movies}
              movies={movies}
              savedMovies={savedMovies}
              moviesIsLoaded={moviesIsLoaded}
              searchMovie={searchMovie}
              toggleIsShort={toggleIsShort}
              saveMovie={saveMovie}
              unsaveMovie={unsaveMovie}
            />
            <ProtectedRoute
              exact
              path='/saved-movies'
              component={SavedMovies}
              movies={savedMovies}
              searchMovie={searchMovie}
              savedMoviesIsLoaded={savedMoviesIsLoaded}
              toggleIsShort={toggleIsShort}
              saveMovie={saveMovie}
              unsaveMovie={unsaveMovie}
            />
            <ProtectedRoute
              exact path='/profile'
              component={Profile}
              logout={logout}
              onUpdateProfile={handleUpdateProfile}
            />
            <Route exact path='/signup'>
              <Register signup={register}/>
            </Route>
            <Route exact path='/signin'>
              <Login login={login} />
            </Route>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='*'>
              <PageNotFound goBack={goBack}/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </SearchFilterMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;