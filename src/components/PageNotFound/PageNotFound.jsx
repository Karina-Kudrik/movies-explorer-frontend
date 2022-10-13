import './PageNotFound.css';
import { useHistory } from "react-router-dom";

function PageNotFound({ goBack }) {
   const history = useHistory();
   return (
      <section className="error__page">
         <h1 className="error__title">404</h1>
         <p className="error__description">Страница не найдена</p>
         <p className="error__link" onClick={history.goBack}>Назад</p>
      </section>
   );
}

export default PageNotFound;