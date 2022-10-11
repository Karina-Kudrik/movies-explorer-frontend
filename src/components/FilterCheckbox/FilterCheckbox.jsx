import React from "react";
import './FilterCheckbox.css';
import { SearchFilterMoviesContext } from "../../contexts/SearchFilterContext";

function FilterCheckbox({ toggleIsShort }) {
  const { isShort } = React.useContext(
    SearchFilterMoviesContext
  );

  return (
    <label className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        defaultChecked={isShort}
        onChange={toggleIsShort}
      />
      <span className="filter__tumbler"></span>
      <span className="filter__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;