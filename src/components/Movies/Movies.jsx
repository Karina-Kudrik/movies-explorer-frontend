import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ searchMovie }) {
   return (
      <section className="movies">
         <SearchForm 
            searchMovie={searchMovie}
         />
         <MoviesCardList
         />
      </section>
   );
}

export default Movies;