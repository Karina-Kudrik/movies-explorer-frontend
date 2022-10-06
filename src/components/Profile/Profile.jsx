import React from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useContext } from "react";


function Profile({ logout, onUpdateProfile }) {
   const currentUser = useContext(CurrentUserContext);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   React.useEffect(() => {
      setName(currentUser.name);
      setEmail(currentUser.email);
   }, [currentUser]);


   function handleProfileName(e) {
      setName(e.target.value);
   }

   function handleProfileEmail(e) {
      setEmail(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();
      onUpdateProfile({
         name: name,
         email: email
      });
   }

   return (
      <section className="profile">
         <form className="profile__form" name="profile" onSubmit={handleSubmit}>
            <h1 className="profile__title">Привет, {currentUser.name || ''}!</h1>
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
                  id="name"
                  value={name || ''}
                  onChange={handleProfileName}
               />
               <span className="profile__error-name"></span>
               </label>
               <label className="profile__label">
               <span className="profile__label-text"></span>
               <input
                  name="email"
                  className="profile__input"
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  value={email || ''}
                  onChange={handleProfileEmail}
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
               <button type="button" className="profile__button-exit" onClick={logout}>
                  Выйти из аккаунта
               </button>
            </div>
         </form>
      </section>
   );
}

export default Profile;