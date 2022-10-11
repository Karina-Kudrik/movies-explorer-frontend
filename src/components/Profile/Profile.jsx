import React from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useForm } from 'react-hook-form';

function Profile({ logout, onUpdateProfile }) {
  const { name, email } = React.useContext(CurrentUserContext);

  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
  });

  React.useEffect(() => {
    setUserData({ name: name, email: email });
  }, [name, email]);

  function handleProfileName(e) {
    setUserData((userData) => ({ ...userData, name: e.target.value }));
  }

  function handleProfileEmail(e) {
    setUserData((userData) => ({ ...userData, email: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateProfile(userData.name, userData.email);
  }

  function userDataIsFilled() {
    return !userData.name && !userData.email;
  }

  return (
    <section className="profile">
      <form className="profile__form" name="profile" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {name}!</h1>
        <div className="profile__container">
          <label className="profile__label">
            <span className="profile__label-text"></span>
            <input
              name="name"
              className="profile__input"
              type="text"
              placeholder="Имя"
              id="name"
              value={userData.name}
              {...register("name", {
                required: "поле для обязательного заполнения",
                onChange: handleProfileName,
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа",
                },
                maxLength: {
                  value: 30,
                  message: "Максимум 30 символа",
                },
              })}
            />
            <span className="profile__error-name">{errors.name?.message}</span>
          </label>
          <label className="profile__label">
            <span className="profile__label-text"></span>
            <input
              name="email"
              className="profile__input"
              type="email"
              placeholder="E-mail"
              id="email"
              value={userData.email}
              {...register("email", {
                required: "поле для обязательного заполнения",
                onChange: handleProfileEmail,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Введите валидный email",
                },
              })}
            />
            <span className="profile__error">{errors.email?.message}</span>
          </label>
        </div>
        <div className="profile__button-container">
          <button
            type="submit"
            className="profile__button-edit"
            disabled={userDataIsFilled()}
          >
            Редактировать
          </button>
          <button type="button" className="profile__button-exit" onClick={logout}>
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;