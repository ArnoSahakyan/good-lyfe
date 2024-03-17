import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    title:'Become more than you are',
    description: 'Staying active is great fun and keeps you healthy.Check out how you can join in.',
    btn:"Let's do it!",
}

const slider2Slice = createSlice({
    name:'slider2',
    initialState:initialStateValue,
    reducers:{},
})
export default slider2Slice.reducer;