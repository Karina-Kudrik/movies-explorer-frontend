import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = ({ onClose }) => {
   const routeMatch = useRouteMatch();

   return (
      <div className="menu">
         <div className="menu__background">
            <div className="menu__container">
               <button
                  type="button"
                  className="menu__close-button"
                  onClick={() => onClose()}
               />
               <ul className="menu__list">
                  <li className="menu__item">
                     <Link to="/" className={ routeMatch.path === "/" ? "menu__link_active" : "menu__link"}>
                     Главная
                     </Link>
                  </li>
                  <li className="menu__item">
                  <Link to="/movies" className={ routeMatch.path === "/movies"
                     ? "menu__link_active"
                     : "menu__link"
                  }>
                  Фильмы
                  </Link>
                  </li>
                  <li className="menu__item">
                     <Link to="/saved-movies" className={ routeMatch.path === "/saved-movies"
                        ? "menu__link_active"
                        : "menu__link"
                     }>
                  Сохранённые фильмы
                  </Link>
                  </li>
               </ul>
               <div className="menu__account-container">
               <li className="menu__item">
                     <Link to="/profile" className="menu__link menu__link_account">Аккаунт
                     </Link>
                  </li>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BurgerMenu;