import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header({login}) {
  const { isLoaded } = React.useContext(CurrentUserContext);
  const location = useLocation();
  const headerClassName = [
    "header",
    location.pathname === "/" && "header_blue",
    !isLoaded && "header_loading",
  ].join(" ");

  return (
    <header className={headerClassName}>
      <div className="header__container">
        <Link to='/' className="header__link">
          <img className="header__logo" src={logo} alt="Лого"/>
        </Link>
        <Navigation login={login}/>
      </div>
    </header>
  );
}

export default Header;