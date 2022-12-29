import {createSlice} from "@reduxjs/toolkit";
import {AiOutlineBook, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {RiMessageLine, RiServiceLine} from "react-icons/ri";

const initialState = {
   navList:[
      {
         href:'#',
         icon:<AiOutlineHome/>
      },
      {
         href:'#about',
         icon:<AiOutlineUser/>
      },
      {
         href:'#experience',
         icon:<AiOutlineBook/>
      },
      {
         href:'#services',
         icon:<RiServiceLine/>
      },
      {
         href:'#contact',
         icon:<RiMessageLine/>
      },
   ],
}
/*
    * [{
    *     href:'#',
    *     icon: <AiOutlineHome/>
    * }]
    * */
const navSlice = createSlice({
   name: 'nav',
   initialState
})

export default navSlice.reducer;