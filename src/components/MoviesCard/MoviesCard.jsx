import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import preview from '../../images/pic__COLOR_pic.png';

function MoviesCard() {
   const [isSaved, setIsSaved] = React.useState(false);

   function saveMovie() {
      setIsSaved(!isSaved);
   }

   const location = useLocation();

   return (<>
         <li className="movies__card-container">
            <img className="movies__preview" src={preview} alt="Фильм" />
            <button className={`movies__save ${!isSaved ? 'movies__save_active' : 'movies__save'}`} onClick={saveMovie} type="button">Сохранить
            </button>
            {location.pathname === '/saved-movies' && <button className='movies__save_delete'/> }
            <div className="movies__info">
               <h3 className="movies__name">Название</h3>
               <p className="movies__duration">1ч 40м</p>
            </div>
         </li>
         </>
   );
}

export default MoviesCard;