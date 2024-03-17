import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    title:'Meet your new Body',
    description: 'Embark on a transformative journey with Goodlyfe. Our tailored fitness programs and expert guidance will empower you to embrace a healthier lifestyle. Get ready to meet your new body!',
    btn:'View the FAQ',
  

}
const info1Slice = createSlice({
    name:'info',
    initialState:initialStateValue,
    reducers:{},
})
export default info1Slice.reducer;