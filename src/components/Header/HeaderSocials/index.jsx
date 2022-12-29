import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs'
import {useSelector, useDispatch} from 'react-redux'

const HeaderSocials = () => {
   const header = useSelector(state => state.header)
   
   return (
      <div className='header__socials'>
         {header.socials.map((content) => {
            return (
               <a key={content.name} href={content.link} target='_blank' rel="noreferrer">
                  {content.icon}
               </a>
            )
         })}
      </div>
   );
};

export default HeaderSocials;
