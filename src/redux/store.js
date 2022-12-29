import {configureStore} from '@reduxjs/toolkit';
import headerReducer from './reducer/header'
import aboutReducer from './reducer/about'
import navReducer from './reducer/nav'

export const store = configureStore({
   reducer: {
      header: headerReducer,
      about: aboutReducer,
      nav: navReducer
   },
})