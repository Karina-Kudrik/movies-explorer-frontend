import student from '../../images/student.jpg';
import './AboutMe.css';

function AboutMe() {
   return (
      <section className="aboutme">
         <div className="aboutme__container">
            <h2 className="aboutme__title">Студент</h2>
            <div className="aboutme__info-container">
               <div className="aboutme__info">
                  <h3 className="aboutme__name">Карина</h3>
                     <p className="aboutme__about">25 лет</p>
                     <p className="aboutme__description">Здесь будет информация о себе</p>
                  <ul className="aboutme__socials">
                     <li className="aboutme__social">
                        <a className="aboutme__social-link" href="https://github.com/Karina-Kudrik" target="_blank">Github</a>
                     </li>
                  </ul>
            </div>
            <img className="aboutme__avatar" src={student} alt="Фото студента"/>
            </div>
         </div>
      </section>
   );
}
export default AboutMe;