import './Techs.css';

function Techs() {
   return (
      <section className="techs">
         <div className="techs__container">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__heading">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__items">
               <li className="tech__item">HTML</li>
               <li className="tech__item">CSS</li>
               <li className="tech__item">JS</li>
               <li className="tech__item">React</li>
               <li className="tech__item">Git</li>
               <li className="tech__item">Express.js</li>
               <li className="tech__item">mongoDB</li>
            </ul>
         </div>
      </section>
   )
}

export default Techs;