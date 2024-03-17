import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  title1: 'Good',
  title2: 'lyfe',
  menu: ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free Trial']
}

const navSlice = createSlice({
  name: 'nav',
  initialState: initialStateValues,
  reducers: {}
})


export default navSlice.reducer;