import React from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';

function Login({login}) {

   const [data, setData] = React.useState({
      email: '',
      password: ''
   });

   const handleChange = (e) => {
      const {name, value} = e.target;
      setData((oldData) => ({
         ...oldData,
         [name]: value
      }));
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      let { email, password } = data;
      login(email, password);
   }
   return (
      <section className="login">
         <form className="login__form" name="login" onSubmit={handleSubmit}>
            <Link to="/" className="login__link">
               <img src={logo} alt="Логотип" className="login__logo" />
            </Link>
            <h1 className="login__title">Рады видеть!</h1>
               <div className="login__container">
                  <label className="login__label">
                  <span className="login__label-text"></span>
                  <input
                     name="email"
                     className="login__input"
                     type="email"
                     required
                     onChange={handleChange}
                  />
                  <span className="login__error"></span>
                  </label>
                  <label className="login__label">
                  <span className="login__label-text"></span>
                  <input
                     name="password"
                     className="login__input"
                     type="password"
                     required
                     placeholder="Пароль"
                     onChange={handleChange}
                  />
                  <span className="login__error"></span>
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