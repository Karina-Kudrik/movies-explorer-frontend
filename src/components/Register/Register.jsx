import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Register({signup}) {
  const history = useHistory();
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      history.push('/movies');
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signup(userData.name, userData.email, userData.password);
  }

  function userDataIsValid() {
    const isEmpty = !userData.name || !userData.email || !userData.password;
      if (isEmpty) {
        return true;
      }

    const isErrors = errors.name || errors.email || errors.password;
      if (isErrors) {
        return true;
      }

    return false;
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
              placeholder="Имя"
              value={userData.name}
              {...register("name", {
                required: "поле для обязательного заполнения",
                onChange: handleChange,
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Максимум 30 символа",
                },
                pattern: {
                  value:
                  /^[a-яё]+(?:[ -][a-яё]+)*$/i,
                  message: "Поле может содержать кириллицу, латиницу, пробел или дефис",
                },
              })}
            />
            <span className="register__error">{errors.name?.message}</span>
          </label>
          <label className="register__label">
            <span className="register__label-text"></span>
            <input
              name="email"
              className="register__input"
              type="email"
              placeholder="Почта"
              value={userData.email}
              {...register("email", {
                required: "поле для обязательного заполнения",
                onChange: handleChange,
                pattern: {
                  value:
                    /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                  message: "Введите валидный email",
                },
              })}
            />
            <span className="register__error">{errors.email?.message}</span>
          </label>
          <label className="register__label">
            <span className="register__label-text"></span>
            <input
              name="password"
              className="register__input"
              type="password"
              required
              placeholder="Пароль"
              value={userData.password}
              {...register("password", {
                required: "поле для обязательного заполнения",
                onChange: handleChange,
              })}
            />
            <span className="register__error">{errors.password?.message}</span>
          </label>
        </div>
        <button
          type="submit"
          className="register__button"
          disabled={userDataIsValid()}
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