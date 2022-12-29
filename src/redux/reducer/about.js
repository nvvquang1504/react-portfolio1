import {createSlice} from '@reduxjs/toolkit';
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import aboutImg from '../../assets/wanted.png';
const initialState = {
   myImg: aboutImg,
   articles: [
      {
         name: 'Experience',
         describe: '1+ Years Working',
         icon: <FaAward className='about__icons'/>
      },
      {
         name: 'Client',
         describe: '50+ client',
         icon: <FiUser className='about__icons'/>,
      },
      {
         name: 'Project',
         describe: '10+ Project',
         icon: <VscFolderLibrary className='about__icons'/>
      },
   ]
   
}
const aboutSlice = createSlice({
   name:'about',
   initialState,
})
export default aboutSlice.reducer;