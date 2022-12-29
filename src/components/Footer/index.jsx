import './style.scss'
import {FaFacebookF, FaGithubAlt} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
   return (
      <footer>
         <a href='#' className='footer__logo'>Nguyen Vo Vinh Quang</a>
         <ul className="permalinks">
            <li>
               <a href="#">
                  Home
               </a>
            </li>
            <li>
               <a href="#about">
                  About
               </a>
            </li>
            <li>
               <a href="#experience">
                  Experience
               </a>
            </li>
            <li>
               <a href="#portfolio">
                  Portfolio
               </a>
            </li>
            <li>
               <a href="#contact">
                  Contact
               </a>
            </li>
         </ul>
         <div className="footer__socials">
            <a href="https://facebook.com/funny1504">
               <FaFacebookF/>
            </a>
            <a href="https://github.com/nvvquang1504">
               <FaGithubAlt/>
            </a>
            <a href="https://instagram.com/funny1504">
               <FiInstagram/>
            </a>
         </div>
         <div className="footer__copyright">
            <small>&copy; Quang Portfolio. All right reserved</small>
         </div>
      </footer>
   );
};
export default Footer;
