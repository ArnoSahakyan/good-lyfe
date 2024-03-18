import { configureStore } from '@reduxjs/toolkit'
import navSlice from '../features/navSlice'
import info1slice from '../features/info1slice'
import slider2slice from '../features/slider2slice'
import info2slice from '../features/info2slice'
import reviewsSlice from '../features/reviewsSlice'
import info3slice from '../features/info3slice'

export default configureStore({
  reducer: {
    nav: navSlice,
    info1: info1slice,
    slider2: slider2slice,
    info2: info2slice,
    reviews: reviewsSlice,
    info3:info3slice
  }
},
)