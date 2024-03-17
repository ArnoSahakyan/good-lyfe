import { configureStore } from '@reduxjs/toolkit'
import info1slice from '../features/info1slice'
export default configureStore({
  reducer: {
    info1:info1slice
  },
})