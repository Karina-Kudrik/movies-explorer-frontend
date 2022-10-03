import './Footer.css';

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__container">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
               <div className="footer__row">
                  <p className="footer__copyright">&copy;2022</p>
                  <ul className="footer__links">
                     <li className="footer__item"><a href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
                     <li className="footer__item"><a href="https://github.com/" rel="noreferrer" className="footer__link" target="_blank">GitHub</a></li>
                  </ul>
               </div>
         </div>
      </footer>
   );
}

export default Footer;