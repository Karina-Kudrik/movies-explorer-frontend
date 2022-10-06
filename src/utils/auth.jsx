//const BASE_URL = 'https://api.moviesexplorer.app.nomoredomains.sbs';
const BASE_URL = 'http://localhost:4000';

const checkResponse = (response) => {
   return response.ok
      ? response.json()
      : Promise.reject(`Ошибка ${response.status}`);
};

export const register = ({name, email, password}) => {
   return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
}).then(checkResponse);
};

export const login = ({email, password}) => {
   return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
}).then(checkResponse);
};

export const getUserInfo = () => {
   return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         authorization: "Bearer " + localStorage.getItem("jwt"),
   },
}).then(checkResponse);
};