import React from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';

function Login({login}) {
   const [userData, setUserData] = React.useState({ password: '', email: ''});

   function handleChange(e) {
      const { name, value } = e.target;

      setUserData({
         ...userData,
         [name]: value
      });
   };

   return (
      <section className="login">
         <form className="login__form" name="login" onSubmit={login}>
            <Link to="/" className="login__link">
               <img src={logo} alt="Логотип" className="login__logo" />
            </Link>
            <h1 className="login__title">Рады видеть!</h1>
               <div className="login__container">
                  <label className="login__label">
                  <span className="login__label-text">E-mail</span>
                  <input
                     name="email"
                     className="login__input"
                     type="email"
                     required
                     placeholder="E-mail"
                     onChange={handleChange}
                  />
                  <span className="login__error"></span>
                  </label>
                  <label className="login__label">
                  <span className="login__label-text">Пароль</span>
                  <input
                     name="password"
                     className="login__input"
                     type="password"
                     required
                     onChange={handleChange}
                  />
                  <span className="login__error">Что-то пошло не так</span>
                  </label>
               </div>
               <button
                  type="submit"
                  className="login__button"
               >
               Войти
               </button>
               <span className="login__signup">
               Ещё не зарегистрированы?&nbsp;
               <a href="/signup" className="login__link">
                  Регистрация
               </a>
               </span>
         </form>
      </section>
   );
}

export default Login;