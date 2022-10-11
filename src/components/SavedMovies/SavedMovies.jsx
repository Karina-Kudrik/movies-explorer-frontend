import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Preloader from '../Preloader/Preloader';
import { LOADING_STATUS } from '../../constants/MoviesConstants';

function SavedMovies({
  movies,
  saveMovie,
  unsaveMovie,
  searchMovie,
  toggleIsShort,
  savedMoviesIsLoaded,
}) {
  return (
    <section className="movies__saved">
      <SearchForm
        searchMovie={searchMovie}
        toggleIsShort={toggleIsShort}
      />
      {savedMoviesIsLoaded === LOADING_STATUS.SUCCESSFULLY ? (
        <MoviesCardList
          movies={movies}
          save={saveMovie}
          unsave={unsaveMovie}
          savedMovies={movies}
        />
      ) : savedMoviesIsLoaded === LOADING_STATUS.NOT_FOUND ? (
        <h1 className="movies__error">Ничего не найдено</h1>
      ) : savedMoviesIsLoaded === LOADING_STATUS.ERROR ? (
        <h1 className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </h1>
      ) : (
        savedMoviesIsLoaded === LOADING_STATUS.LOADING && <Preloader />
      )}
    </section>
  );
}

export default SavedMovies;