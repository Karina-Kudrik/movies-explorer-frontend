import './MoviesCard.css';
import previw from '../../images/pic__COLOR_pic.png';
function MoviesCard() {
   // const movieSaveButtonClassName = (
   //    `movies__save ${isSaved ? 'movies__save_active' : 'movies__save'}`);
   return (<>
         <li className="movies__card-container">
            <img className="movies__preview" src={previw} alt="Превью"/>
            <button className="movies__save" type="button">Сохранить</button>
            <div className="movies__info">
               <h3 className="movies__name">Фильм</h3>
               <p className="movies__duration">1ч 20м</p>
            </div>
         </li>
         <li className="movies__card-container">
            <img className="movies__preview" src={previw} alt="Превью"/>
            <button className="movies__save" type="button">Сохранить</button>
            <div className="movies__info">
               <h3 className="movies__name">Фильм с очень очень преочень очень очень преочень длинным названием</h3>
               <p className="movies__duration">1ч 20м</p>
            </div>
         </li>
         <li className="movies__card-container">
            <img className="movies__preview" src={previw} alt="Превью"/>
            <button className="movies__save" type="button">Сохранить</button>
            <div className="movies__info">
               <h3 className="movies__name">Фильм с очень очень преочень очень очень преочень длинным названием</h3>
               <p className="movies__duration">1ч 20м</p>
            </div>
         </li>
         </>
   );
}

export default MoviesCard;