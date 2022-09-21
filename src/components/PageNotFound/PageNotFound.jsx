import './PageNotFound.css';

function PageNotFound() {
   return (
      <section className="error__page">
         <h1 className="error__title">404</h1>
         <p className="error__description">Страница не найдена</p>
         <p className="error__link">Назад</p>
      </section>
   );
}

export default PageNotFound;