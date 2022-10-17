import React from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

function Login({login}) {
  const history = useHistory();
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      history.push('/movies');
    }
  }, []);

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

  function userDataIsValid() {
    const isEmpty = !data.email || !data.password;
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
              placeholder="Почта"
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
            <span className="login__error">{errors.email?.message}</span>
          </label>
          <label className="login__label">
            <span className="login__label-text"></span>
            <input
              name="password"
              className="login__input"
              type="password"
              required
              placeholder="Пароль"
              {...register("password", {
                required: "поле для обязательного заполнения",
                onChange: handleChange,
              })}
            />
            <span className="login__error">{errors.password?.message}</span>
          </label>
        </div>
        <button 
            type="submit" 
            className="login__button" 
            disabled={userDataIsValid()}
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