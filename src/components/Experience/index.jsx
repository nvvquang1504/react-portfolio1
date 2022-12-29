import './style.scss'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
   return (
      <section id='experience'>
         <h5>What Skills i Have </h5>
         <h2>My Experience</h2>
         <div className="container experience__container">
            <div className="experience__frontend">
               <h3>
                  Frontend Development
               </h3>
               <div className="experience__content">
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>HTML</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>CSS</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>Javascript</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>React</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>HTML</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
               </div>
            </div>
            <div className="experience__backend">
               <h3>
                  Backend Development
               </h3>
               <div className="experience__content">
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>Nodejs</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>MS SQL Server</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>MongoDB</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>Php</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
                  <article className="experience__details">
                     <BsPatchCheckFill className='experience__details--icons'/>
                     <div>
                        <h4>HTML</h4>
                        <small>Experienced</small>
                     </div>
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Experience;
