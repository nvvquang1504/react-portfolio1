import './style.scss'
import wanted from '../../assets/wanted.png'
import {useSelector} from "react-redux";

const About = () => {
   const about = useSelector(state => state.about);
   return (
      <section id='about'>
         <h5>Get to know</h5>
         <h2>About me</h2>
         <div className="container about__container">
            <div className="about__me">
               <div className="about__me--image">
                  <img src={about.myImg} alt=""/>
               </div>
            </div>
            <div className="about__content">
               <div className="about__cards">
                  {about.articles.map((article) => {
                     return (
                        <article key={article.name} className="about__card">
                           {article.icon}
                           <h5>{article.name}</h5>
                           <small>{article.describe}</small>
                        </article>
                     )
                  })}
               </div>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem cumque explicabo id illo impedit
                  ipsum itaque laborum neque praesentium quae quos, sit tempore ullam velit vitae voluptas. Eum,
                  veniam?
               </p>
               <a href={"#contact"} className='btn btn-primary'>Let's talk</a>
            </div>
         </div>
      </section>
   );
};
export default About;
