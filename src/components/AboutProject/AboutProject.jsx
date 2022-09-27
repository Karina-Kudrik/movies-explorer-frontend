import './AboutProject.css';

function AboutProject() {
   return (
      <section className="project" id="about-project">
         <div className="project__container">
            <h2 className="project__title">
               О проекте
            </h2>
            <ul className="project__table">
               <li className="project__part">
                  <h3 className='project__heading'>Дипломный проект включал 5 этапов</h3>
                  <p className='project__description'>Составление плана,работу над бэкендом, верстку, добавление функциональности и финальную доработку.</p>
               </li>
               <li className="project__part">
                  <h3 className='project__heading'>На выполнение диплома ушло 5 недель</h3>
                  <p className='project__description'>У каждого этапа был мягкий и жесткий дедлайн, которые нудно было соблюдать, чтобы успешно защититься.</p>
               </li>
            </ul>
            <div className="project__schema">
               <div className="project__backend">
                  <span className="project__backend-duration">1 неделя</span>
                  <span className="project__span">Back-end</span>
               </div>
               <div className="project__frontend">
                  <span className="project__frontend-duration">4 недели</span>
                  <span className="project__span">Front-end</span>
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutProject;