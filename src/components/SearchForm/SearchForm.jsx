import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
   return (
      <section className="search">
         <form className="search__form" name="search" noValidate>
            <input
               className="search__input"
               name="search"
               type="text"
               placeholder="Фильм"
               autoComplete="off"
               required
            />
         <span className="search__error"></span>
         <button className="search__button" type="submit">Найти</button>
         </form>
         <FilterCheckbox/>
      </section>
   );
}

export default SearchForm;