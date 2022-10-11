import React from "react";
import { getSavedMovies } from "../utils/MainApi";
import { LOADING_STATUS } from "../constants/MoviesConstants";

function useSavedMovies(currentUser, searchFilterMovies) {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesIsLoaded, setSavedMoviesIsLoaded] = React.useState(
    LOADING_STATUS.SUCCESSFULLY
  );

  React.useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    const jwt = localStorage.getItem("jwt");

    if (!savedMovies && jwt && currentUser._id) {
      setSavedMoviesIsLoaded(LOADING_STATUS.LOADING);
      getSavedMovies()
        .then((allSavedMovies) => {
          const savedMovies = getMoviesOfCurrentUser(allSavedMovies);
          const filteredSavedMovies = filterMovies(savedMovies);

          saveMovies(filteredSavedMovies);

          if (filteredSavedMovies.length) {
            setSavedMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
            return;
          }

          setSavedMoviesIsLoaded(LOADING_STATUS.NOT_FOUND);
        })
        .catch((error) => {
          setSavedMoviesIsLoaded(LOADING_STATUS.ERROR);
          console.log(error);
        });
      return;
    }

    if (savedMovies) {
      setSavedMovies(filterMovies(savedMovies));
    }
    
  }, [searchFilterMovies, currentUser._id]);

  function saveMovies(movies) {
    localStorage.setItem("savedMovies", JSON.stringify(movies));
    setSavedMovies(movies);
  }

  function filterMovies(movies) {
    return movies.filter(
      (movie) => isRightName(movie.nameRU) && isRightDuration(movie.duration)
    );
  }

  function isRightName(name) {
    return name.toLowerCase().includes(searchFilterMovies.name.toLowerCase());
  }

  function isRightDuration(duration) {
    return !searchFilterMovies.isShort || duration <= 40;
  }

  function getMoviesOfCurrentUser(savedMovies) {
    return savedMovies.filter(
      (savedMovie) => savedMovie.owner === currentUser._id
    );
  }

  return [
    savedMovies,
    setSavedMovies,
    savedMoviesIsLoaded,
    setSavedMoviesIsLoaded,
  ];
}

export default useSavedMovies;