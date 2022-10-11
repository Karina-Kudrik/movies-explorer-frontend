import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import { LOADING_STATUS } from '../../constants/MoviesConstants';

function Movies({
  movies,
  searchMovie,
  toggleIsShort,
  saveMovie,
  unsaveMovie,
  savedMovies,
  moviesIsLoaded,
}) {
  return (
    <section className="movies">
      <SearchForm
        searchMovie={searchMovie}
        toggleIsShort={toggleIsShort}
      />
      {moviesIsLoaded === LOADING_STATUS.SUCCESSFULLY ? (
        <MoviesCardList
          movies={movies}
          save={saveMovie}
          unsave={unsaveMovie}
          savedMovies={savedMovies}
        />
      ) : moviesIsLoaded === LOADING_STATUS.NOT_FOUND ? (
        <h1 className="movies__error">Ничего не найдено</h1>
      ) : moviesIsLoaded === LOADING_STATUS.ERROR ? (
        <h1 className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </h1>
      ) : (
        moviesIsLoaded === LOADING_STATUS.LOADING && <Preloader />
      )}
    </section>
  );
}

export default Movies;