import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

function MoviesCardList() {
   return (
      <section className="movies__list">
         <ul className="movies__list-container">
            <MoviesCard/>
         </ul>
         <button className="movies__show-more">
            Ещё
         </button>
      </section>
   );
}

export default MoviesCardList;