export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (res) => {
   if (res.ok) {
      return res.json();
   } else {
      return Promise.reject(`Возникла ошибка ${res.status}`);
   }
}

export const getMovies = () => {
   return fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   }).then(checkResponse)
};