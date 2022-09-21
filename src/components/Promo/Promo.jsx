import promo from '../../images/promo__image.svg';
import './Promo.css';

function Promo() {
   return (
      <section className="promo">
         <div className="promo__container">
            <div className="promo__description">
               <h1 className="promo__title">
                  Учебный проект студента факультета Веб-разработки.
               </h1>
               <p className="promo__info">
                  Листайте ниже, чтобы узнать больше про этот проект и его создателя.
               </p>
               <a className="promo__link">
               Узнать больше
               </a>
            </div>
               <img className="promo__image" src={promo} alt="Весь мир"/>
         </div>
      </section>
   );
}

export default Promo;