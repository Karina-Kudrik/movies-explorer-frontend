import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const [loggedIn, setIsLoggedIn] = React.useState(true);
  const history = useHistory();

  function login() {
    setIsLoggedIn(true);
    history.push('/movies');
  }

  function logout() {
    setIsLoggedIn(false);
    history.push('/');
  }

  function register() {
    history.push('/signin');
}

  return (
    <div className="app">
      <Switch>
        <Route exact path='/movies'>
          <Header loggedIn={loggedIn} />
          <Movies />
          <Footer />
        </Route>
        <Route exact path='/saved-movies'>
          <Header loggedIn={loggedIn} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path='/profile'>
          <Header loggedIn={loggedIn} />
          <Profile logout={logout}/>
        </Route>
        <Route exact path='/signup'>
          <Register register={register}/>
        </Route>
        <Route exact path='/signin'>
          <Login login={login} />
        </Route>
        <Route exact path='/'>
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <Route path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
      <BurgerMenu/>
    </div>
  );
}

export default App;
