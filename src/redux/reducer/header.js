import {createSlice} from "@reduxjs/toolkit";
import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs';

const initialState = {
   hello: "Hello i'm",
   fullName: 'Nguyen Vo Vinh Quang',
   socials: [
      {
         name: 'facebook',
         icon: <BsFacebook/>,
         link:'https://facebook.com/funny1504'
      },
      {
         name: 'github',
         icon: <BsGithub/>,
         link:'https://github.com/nvvquang1504'
      },
      {
         name: 'twitter',
         icon: <BsInstagram/>,
         link:'https://instagram.com/funny1504'
      },
   ]
}

const headerSlice = createSlice({
   name: 'header',
   initialState,
   reducers: {
      setHeader: (state, action) => {
      
      }
   }
})
export default headerSlice.reducer


