import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchMovie, toggleIsShort }) {
  const [searchedKeywords, setSearchedKeywords] = React.useState(
    localStorage.getItem("searchedKeywords") || ""
  );

  function handleChangeSearchedKeywords(e) {
    setSearchedKeywords(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    searchMovie(searchedKeywords);
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
          value={searchedKeywords}
          onChange={handleChangeSearchedKeywords}
        />
        <span className="search__error"></span>
        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
      <FilterCheckbox toggleIsShort={toggleIsShort} />
    </section>
  );
}

export default SearchForm;