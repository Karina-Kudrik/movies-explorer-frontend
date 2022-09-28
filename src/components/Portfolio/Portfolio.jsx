import './Portfolio.css';

function Portfolio() {
   return (
      <section className="portfolio">
         <div className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
               <li className="portfolio__item"><a className="portfolio__link" rel="noreferrer" href='https://github.com/Karina-Kudrik/how-to-learn' target="_blank">Статичный сайт</a></li>
               <li className="portfolio__item"><a className="portfolio__link" rel="noreferrer" href='https://github.com/Karina-Kudrik/russian-travel' target="_blank">Адаптивный сайт</a></li>
               <li className="portfolio__item"><a className="portfolio__link"  rel="noreferrer" href='https://github.com/Karina-Kudrik/react-mesto-api-full' target="_blank">Одностраничное приложение</a></li>
            </ul>
         </div>
      </section>
   );
}

export default Portfolio;