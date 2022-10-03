import './MoviesCard.css';
import previw from '../../images/pic__COLOR_pic.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
   const [isSaved, setIsSaved] = React.useState(false);

   function saveMovie() {
      setIsSaved(!isSaved);
   }

   const location = useLocation();

   return (<>
         <li className="movies__card-container">
            <img className="movies__preview" src={previw} alt="Превью"/>
            <button className={`movies__save ${!isSaved ? 'movies__save_active' : 'movies__save'}`} onClick={saveMovie} type="button">Сохранить
            </button>
            {location.pathname === '/saved-movies' && <button className='movies__save_delete'/> }
            <div className="movies__info">
               <h3 className="movies__name">Фильм с очень очень преочень очень очень преочень длинным названием</h3>
               <p className="movies__duration">1ч 20м</p>
            </div>
         </li>
         </>
   );
}

export default MoviesCard;