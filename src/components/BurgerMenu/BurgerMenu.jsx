import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = ({ onClose, isOpen }) => {

   return (
      <div className={isOpen ? "menu menu_open" : "menu"}>
         <div className="menu__background">
            <div className="menu__container">
               <button
                  type="button"
                  className="menu__close-button"
                  onClick={() => onClose()}
               />
               <ul className="menu__list">
                  <li className="menu__item">
                     <NavLink exact to="/" className="menu__link" activeClassName="menu__link_active">
                        Главная
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to="/movies" className="menu__link" activeClassName="menu__link_active">
                        Фильмы
                     </NavLink>
                  </li>
                  <li className="menu__item">
                     <NavLink to="/saved-movies" className="menu__link" activeClassName="menu__link_active">
                        Сохранённые фильмы
                     </NavLink>
                  </li>
               </ul>
               <div className="menu__account-container">
                  <div className="menu__item">
                     <NavLink to="/profile" className="menu__link menu__link_account">
                        Аккаунт
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BurgerMenu;