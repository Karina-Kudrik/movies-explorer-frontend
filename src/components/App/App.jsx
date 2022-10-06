import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from '../ProtectedRoute';
import * as auth from "../../utils/auth";
import * as mainApi from "../../utils/MainApi";
//import * as moviesApi from "../../utils/MoviesApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    checkToken();
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (loggedIn) {
        auth
        .getUserInfo(token)
        .then((user) => {
            if (user) {
                setLoggedIn(true);
                setCurrentUser({
                  name: user.data.name,
                  email: user.data.email,
              });
            history.push('/movies')
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }
  }, [loggedIn]);

  function login(email, password) {
    auth
      .login({email, password})
      .then((res) => {
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push('/movies');
        })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
      })
  }

  function logout() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
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
      .catch((err) => console.log(err))
  }

  function checkToken() {
    let token = localStorage.getItem("jwt");
    if (token) {
      auth
        .getUserInfo(token)
        .then((user) => {
          setLoggedIn(true);
          setCurrentUser({
            name: user.data.name,
            email: user.data.email,
        });
          history.push('/movies');
      })
        .catch((err) => console.log(err));
    }
  }

  function handleUpdateProfile(name, email) {
    mainApi
      .updateUserInfo(name, email)
      .then((user) => {
        setCurrentUser({
          name: user.name,
          email: user.email
        });
    })
        .catch((err) => {
            console.log(err);
        });
  }


  function handleSearch(value) {
    if (value.length === 0) {
      console.log('Нужно ввести ключевое слово');
    }
  }

  // const [movies, setMovies] = React.useState([]);

//   React.useEffect(() => {
//     if (loggedIn) {
//       const moviesList = localStorage.getItem("movies");
//         if (moviesList) {
//           setMovies(JSON.parse(moviesList));
//         } else {
//           getMovies();
//         }
//       }
// }, [loggedIn]);

// function getMovies() {;
//     moviesApi
//         .getMovies()
//         .then((movies) => {
//             localStorage.setItem("movies", JSON.stringify(movies));
//             setMovies(movies);
//         })
//         .catch((err) => console.log(err))
// }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
      <Header loggedIn={loggedIn} />
      <Switch>
        <ProtectedRoute 
        exact 
        path='/movies'
        component={Movies}
        loggedIn={loggedIn}
        searchMovie={handleSearch}
        //movies={movies}
        />
        <ProtectedRoute 
        exact 
        path='/saved-movies'
        component={SavedMovies} 
        loggedIn={loggedIn}
        />
        <ProtectedRoute 
        exact path='/profile'
        component={Profile}
        logout={logout}
        loggedIn={loggedIn}
        onUpdateProfile={handleUpdateProfile}
        />
        <Route exact path='/signup'>
          <Register register={register}/>
        </Route>
        <Route exact path='/signin'>
          <Login login={login} />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}


export default App;