import './Portfolio.css';

function Portfolio() {
   return (
      <section className="portfolio">
         <div className="portfolio__container">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
               <li className="portfolio__item"><a className="portfolio__link" href='#' target="_blank">Статичный сайт</a></li>
               <li className="portfolio__item"><a className="portfolio__link" href='#' target="_blank">Адаптивный сайт</a></li>
               <li className="portfolio__item"><a className="portfolio__link" href='#' target="_blank">Одностраничное приложение</a></li>
            </ul>
         </div>
      </section>
   );
}

export default Portfolio;