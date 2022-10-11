//const BASE_URL = 'https://api.moviesexplorer.app.nomoredomains.sbs';
const BASE_URL = 'http://localhost:4000';

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка ${response.status}`);
};

export const updateUserInfo = (token, name, email) => {
  console.log(token, name, email);
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  }).then(checkResponse);
};

export const createMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("jwt"),
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: "https://api.nomoreparties.co" + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: "https://api.nomoreparties.co" + movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then(checkResponse);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  }).then(checkResponse);
};