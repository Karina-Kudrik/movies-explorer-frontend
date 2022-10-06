import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMovie }) {
   const [inputValue, setInputValue] = React.useState(localStorage.getItem("value") || '');

   function handleChangeInput(e) {
      setInputValue(e.target.value);
   }

   function handleSearch(evt) {
      evt.preventDefault();
      searchMovie(inputValue);
      localStorage.setItem("value", inputValue);
   }
   return (
      <section className="search">
         <form className="search__form" name="search" onSubmit={handleSearch}>
            <input
               className="search__input"
               name="search"
               type="text"
               placeholder="Фильм"
               autoComplete="off"
               id='search'
               value={inputValue}
               onChange={handleChangeInput}
            />
         <span className="search__error"></span>
         <button className="search__button" type="submit">Найти</button>
         </form>
         <FilterCheckbox />
      </section>
   );
}

export default SearchForm;