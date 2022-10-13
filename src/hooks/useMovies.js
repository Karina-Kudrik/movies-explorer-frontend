import React from "react";
import { getMovies } from "../utils/MoviesApi";
import { LOADING_STATUS } from "../constants/MoviesConstants";

const useMovies = (currentUser, searchFilterMovies) => {
  const [movies, setMovies] = React.useState([]);
  const [moviesIsLoaded, setMoviesIsLoaded] = React.useState(
    LOADING_STATUS.SUCCESSFULLY
  );

  React.useEffect(() => {
    if (!searchFilterMovies.name) return;

    setMoviesIsLoaded(LOADING_STATUS.LOADING);

    const movies = JSON.parse(localStorage.getItem("movies"));
    const jwt = localStorage.getItem("jwt");

    if (!movies && jwt && currentUser._id) {
      getMovies()
        .then((movies) => {
          localStorage.setItem("movies", JSON.stringify(movies));

          const filteredMovies = filterMovies(movies);
          setMovies(filteredMovies);

          if (filteredMovies.length) {
            setMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
            return;
          }

          setMoviesIsLoaded(LOADING_STATUS.NOT_FOUND);
        })
        .catch((error) => {
          setMoviesIsLoaded(LOADING_STATUS.ERROR);
          console.log(error);
        });
      return;
    }

    if (movies) {
      setMovies(filterMovies(movies));
      setMoviesIsLoaded(LOADING_STATUS.SUCCESSFULLY);
    }
  }, [searchFilterMovies, currentUser._id]);

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

  return [movies, setMovies, moviesIsLoaded, setMoviesIsLoaded];
};

export default useMovies;
