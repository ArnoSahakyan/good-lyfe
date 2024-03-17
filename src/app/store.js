import { configureStore } from '@reduxjs/toolkit'
import navSlice from '../features/navSlice'

export default configureStore({
  reducer: {
    nav: navSlice
  }
})