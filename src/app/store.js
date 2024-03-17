import { configureStore } from '@reduxjs/toolkit'
import navSlice from '../features/navSlice'
import info1slice from '../features/info1slice'
import slider2slice from '../features/slider2slice'

export default configureStore({
  reducer: {
    nav: navSlice,
    info1: info1slice,
    slider2:slider2slice
  }
},
)