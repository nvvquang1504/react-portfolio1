import './style.scss'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const Project = () => {
   return (
      <section id='portfolio'>
         <h5>
            My Personal Project
         </h5>
         <h2>
            Project
         </h2>
         <div className="container portfolio__container">
            <article className='portfolio__item'>
               <div className='portfolio__item--image'>
                  <img src={img1} alt=""/>
               </div>
               <h3>
                  This is a portfolio item title
               </h3>
               <div className="portfolio__item--cta">
                  <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">
                     Github
                  </a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
                     Live Demo
                  </a>
               </div>
            </article>
            <article className='portfolio__item'>
               <div className='portfolio__item--image'>
                  <img src={img2} alt=""/>
               </div>
               <h3>
                  This is a portfolio item title
               </h3>
               <div className="portfolio__item--cta">
                  
                  <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">
                     Github
                  </a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
                     Live Demo
                  </a>
               </div>
            
            </article>
            <article className='portfolio__item'>
               <div className='portfolio__item--image'>
                  <img src={img3} alt=""/>
               </div>
               <h3>
                  This is a portfolio item title
               </h3>
               <div className="portfolio__item--cta">
                  
                  <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">
                     Github
                  </a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
                     Live Demo
                  </a>
               </div>
            
            </article>
            <article className='portfolio__item'>
               <div className='portfolio__item--image'>
                  <img src={img4} alt=""/>
               </div>
               <h3>
                  This is a portfolio item title
               </h3>
               <div className="portfolio__item--cta">
                  
                  <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">
                     Github
                  </a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
                     Live Demo
                  </a>
               </div>
            
            </article>
            <article className='portfolio__item'>
               <div className='portfolio__item--image'>
                  <img src={img5} alt=""/>
               </div>
               <h3>
                  This is a portfolio item title
               </h3>
               <div className="portfolio__item--cta">
                  
                  <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">
                     Github
                  </a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
                     Live Demo
                  </a>
               </div>
            
            </article>
            <article className='portfolio__item'>
               <div className='portfolio__item--image'>
                  <img src={img6} alt=""/>
               </div>
               <h3>
                  This is a portfolio item title
               </h3>
               <div className="portfolio__item--cta">
                  
                  <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">
                     Github
                  </a>
                  <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">
                     Live Demo
                  </a>
               </div>
            
            </article>
         </div>
      </section>
   );
};

export default Project;
