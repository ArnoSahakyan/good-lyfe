import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    title:'Meet your new Body',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.',
    btn:'Lets do it',
  

}
const info1Slice = createSlice({
    name:'info',
    initialState:initialStateValue,
    reducers:{},
})
export default info1Slice.reducer;