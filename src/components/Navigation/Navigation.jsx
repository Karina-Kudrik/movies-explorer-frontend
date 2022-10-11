import './Navigation.css';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navigation() {
  const { isLogged } = React.useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className="header__navigation">
      {!isLogged ? (
        <>
          <li>
            <NavLink to='/signup' className="header__link header__link_signup">
              Регистрация
            </NavLink>
          </li>
          <li>
            <NavLink to='/signin' className="header__link header__link_signin">
              Войти
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to='/movies' className="header__link header__link_hidden"  activeClassName="header__link_active">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to='/saved-movies' className="header__link header__link_hidden"  activeClassName="header__link_active">
              Сохранённые фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' className="header__link header__link_account">
              Аккаунт
            </NavLink>
          </li>
          {!isOpen ? (
            <button className="menu__button" onClick={toggleMenu} />
          ) : (
            <BurgerMenu onClose={toggleMenu} isOpen={isOpen}/>
          )}
        </>
      )}
    </ul>
  );
}

export default Navigation;
