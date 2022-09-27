import './Navigation.css';
import React, { useState } from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({loggedIn}) {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const routeMatch = useRouteMatch();

   return (
      <ul className="header__navigation">
         {loggedIn ? (
            <>
               <li>
                  <Link to='/signup' className="header__link header__link_signup">
                  Регистрация
                  </Link>
               </li>
               <li>
                  <Link to='/signin' className="header__link header__link_signin">
                  Войти
                  </Link>
               </li>
            </>
         ) : (
            <>
               <li>
                  <Link to='/movies' className={routeMatch.path === '/movies' ? "header__link" : "header__link_active"}>
                  Фильмы
                  </Link>
               </li>
               <li>
                  <Link to='/saved-movies' className={routeMatch.path === '/saved-movies' ? "header__link" : "header__link_active"}>
                  Сохранённые фильмы
                  </Link>
                  </li>
               <li>
               <Link to='/profile' className="header__link header__link_account">
                  Аккаунт
               </Link>
            </li>
            {!isOpen ? (
            <button className="menu__button" onClick={toggleMenu} />
         ) : (
            <BurgerMenu onClose={toggleMenu} />
         )}
         </>
         )}
      </ul>
   );
}

export default Navigation;