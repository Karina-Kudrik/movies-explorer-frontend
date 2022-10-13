import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { BREAKPOINTS } from "../../constants/MoviesConstants";

function MoviesCardList({ movies, save, unsave, savedMovies }) {
  const [loadCardsCount, setLoadCardsCount] = React.useState(null);
  const [numberOfVisibleMovies, setNumberOfVisibleMovies] =
    React.useState(null);
  const [maxVisibleCards, setMaxVisibleCards] = React.useState(null);
  const [maxCardsInRow, setMaxCardsInRow] = React.useState(null);

  React.useEffect(() => {
    if (!numberOfVisibleMovies) {
      setNumberOfVisibleMovies(loadCardsCount);
    }

    if (numberOfVisibleMovies > maxVisibleCards) {
      setNumberOfVisibleMovies(maxVisibleCards);
    }
  }, [maxVisibleCards]);


  React.useEffect(() => {
    calculateCardsList();
    window.addEventListener("resize", calculateCardsList);

    return () => {
      window.removeEventListener("resize", calculateCardsList);
    };
  }, []);

  function handleClickOnButton() {
    setNumberOfVisibleMovies(
      numberOfVisibleMovies + loadCardsCount > maxVisibleCards
        ? numberOfVisibleMovies + (maxVisibleCards - numberOfVisibleMovies)
        : numberOfVisibleMovies + loadCardsCount
    );
  }

  const calculateCardsList = React.useCallback(() => {
    setTimeout(() => {
      for (const deviceName in BREAKPOINTS) {
        if (Object.hasOwnProperty.call(BREAKPOINTS, deviceName)) {
          const device = BREAKPOINTS[deviceName];
          const correctMinWidth = device.minWidth < window.innerWidth;
          const correctMaxWidth = device.maxWidth > window.innerWidth;

          if (correctMinWidth && correctMaxWidth) {
            setLoadCardsCount(device.loadCardsCount);
            setMaxVisibleCards(device.maxCards);
            setMaxCardsInRow(device.cardsInRow);
            break;
          }
        }
      }
    }, 300);
  });

  return (
    <section className="movies__list">
      <ul className="movies__list-container"
        style={{
          gridTemplateColumns: `repeat(${maxCardsInRow}, minmax(200px, 1fr)`,
        }}
      >
        {movies.slice(0, numberOfVisibleMovies).map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            save={save}
            unsave={unsave}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
      {movies.length > numberOfVisibleMovies &&
        numberOfVisibleMovies < maxVisibleCards && (
          <button className="movies__show-more" onClick={handleClickOnButton}>
            Ещё
          </button>
        )}
    </section>
  );
}

export default MoviesCardList;