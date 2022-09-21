import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
   return (
      <section className="login">
         <form className="login__form" name="login" noValidate>
            <a to="/" className="login__link">
               <img src={logo} alt="Логотип" className="login__logo" />
            </a>
            <h1 className="login__title">Рады видеть!</h1>
               <div className="login__container">
                  <label className="login__label">
                  <span className="login__label-text">E-mail</span>
                  <input
                     name="email"
                     className="login__input"
                     type="email"
                     required
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
               <a to="signup" className="login__link">
                  Регистрация
               </a>
               </span>
         </form>
      </section>
   );
}

export default Login;