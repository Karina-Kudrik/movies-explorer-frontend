import './MoviesCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, save, unsave, savedMovies }) {
  const location = useLocation();
  const isSaved = savedMovies.some(
    (savedMovie) => savedMovie.movieId === (movie.id || movie.movieId)
  );
  
  function handleSaveMovie(e) {
    e.stopPropagation();

    if (isSaved) {
      return unsave(
        savedMovies.find(
          (savedMovie) => savedMovie.movieId === (movie.id || movie.movieId)
        )._id
      );
    }
    return save(movie);
  }

  function handleClick(e) {
    if (movie.trailerLink) {
      window.location.href = movie.trailerLink;
    } else {
      alert("У данного фильма отсутствует трейлер.")
    }
  }

  return (<>
      <li className="movies__card-container" onClick={handleClick}>
        <img className="movies__preview" src={
            movie.image.url
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
        />
        <button
          className={`movies__save ${
            isSaved ? "movies__save_active" : "movies__save"
          }`}
          onClick={handleSaveMovie}
          type="button"
        >
          Сохранить
        </button>
        {location.pathname === '/saved-movies' && (<button className='movies__save_delete' onClick={handleSaveMovie} />)}
        <div className="movies__info">
          <h3 className="movies__name">{movie.nameRU}</h3>
          <p className="movies__duration">
            {Math.floor(movie.duration / 60)}ч {movie.duration % 60}м
          </p>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;