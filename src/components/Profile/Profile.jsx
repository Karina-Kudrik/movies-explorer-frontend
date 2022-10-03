import './Profile.css';

function Profile({ logout }) {
   return (
      <section className="profile">
         <form className="profile__form" name="profile" noValidate>
            <h1 className="profile__title">Привет, currentUser!</h1>
            <div className="profile__container">
               <label className="profile__label">
               <span className="profile__label-text"></span>
               <input
                  name="name"
                  className="profile__input"
                  type="text"
                  required
                  minLength="2"
                  maxLength="30"
                  placeholder="Имя"
               />
               <span className="profile__error-name"></span>
               </label>
               <label className="profile__label">
               <span className="profile__label-text"></span>
               <input
                  name="email"
                  className="profile__input"
                  type="email"
                  required
                  placeholder="E-mail"
               />
               <span className="profile__error"></span>
               </label>
            </div>
            <div className="profile__button-container">
               <button
                  type="submit"
                  className="profile__button-edit"
               >
                  Редактировать
               </button>
               <button type="submit" className="profile__button-exit" onClick={logout}>
                  Выйти из аккаунта
               </button>
            </div>
         </form>
      </section>
   );
}

export default Profile;