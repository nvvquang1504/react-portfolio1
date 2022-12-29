import './style.scss'
import CTA from './CTA'
import imgWanted from '../../assets/wanted.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
   return (
      <header>
         <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Nguyen Vo Vinh Quang</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            
            <CTA/>
            
            <HeaderSocials/>
            
            <div className='me'>
               <img src={imgWanted} alt=""/>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
         </div>
      </header>
   );
};

export default Header;
