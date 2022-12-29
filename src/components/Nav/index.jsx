import './style.scss'
import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

const Nav = () => {
   const [activeItem, setActiveItem] = useState('#');
   const nav = useSelector(state => state.nav);
   
   return (
      <nav>
         {nav.navList.map((i) => {
            return (
               <a onClick={() => {
                  setActiveItem(i.href)
               }} href={i.href}
                  className={`${activeItem === i.href ? 'active' : ''}`}
                  key={i.href}
               >
                  {i.icon}
               </a>
            )
         })}
      </nav>
   );
};

export default Nav;
