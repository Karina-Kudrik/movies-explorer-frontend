import './PageNotFound.css';

function PageNotFound({ goBack }) {
   return (
      <section className="error__page">
         <h1 className="error__title">404</h1>
         <p className="error__description">Страница не найдена</p>
         <p className="error__link" onClick={goBack}>Назад</p>
      </section>
   );
}

export default PageNotFound;