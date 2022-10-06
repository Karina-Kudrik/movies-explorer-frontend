import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register({register}) {
   const [userData, setUserData] = React.useState({ name: '', email: '', password: '' });

   function handleChange(e) {
      const { name, value } = e.target;
      setUserData({
            ...userData,
            [name]: value
      });
   }

   function handleSubmit(evt) {
      evt.preventDefault();
      register(userData);
   }

   return (
      <section className="register">
         <form className="register__form" name="register" onSubmit={handleSubmit}>
            <Link to="/" className="register__link">
               <img src={logo} alt="Логотип" className="register__logo" />
            </Link>
            <h1 className="register__title">Добро пожаловать!</h1>
               <div className="register__container">
                  <label className="register__label">
                  <span className="register__label-text"></span>
                  <input
                     name="name"
                     className="register__input"
                     type="text"
                     required
                     minLength="2"
                     maxLength="30"
                     value={userData.name || ''}
                     onChange={handleChange}
                  />
                  <span className="register__error"></span>
                  </label>
                  <label className="register__label">
                  <span className="register__label-text"></span>
                  <input
                     name="email"
                     className="register__input"
                     type="email"
                     required
                     value={userData.email || ''}
                     onChange={handleChange}
                  />
                  <span className="register__error"></span>
                  </label>
                  <label className="register__label">
                  <span className="register__label-text"></span>
                  <input
                     name="password"
                     className="register__input"
                     type="password"
                     required
                     placeholder="Пароль"
                     value={userData.password || ''}
                     onChange={handleChange}
                  />
                  <span className="register__error"></span>
                  </label>
               </div>
               <button
                  type="submit"
                  className='register__button'
               >
               Зарегистрироваться
               </button>
               <span className="register__signin">
                  Уже зарегистрированы?&nbsp;
               <a href="/signin" className="register__link">
                  Войти
               </a>
               </span>
         </form>
      </section>
);
}
export default Register;