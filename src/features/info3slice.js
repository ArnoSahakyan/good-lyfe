import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    title: "Don't forget Our App",
    description: "Stay connected with our exclusive gym app! Enjoy personalized workouts, track your progress, and receive notifications for upcoming classes and special promotions. Download now and elevate your fitness journey.",
    download:'Download Now:',
}

const info3Slice = createSlice({
    name: 'info3',
    initialState: initialStateValue,
    reducers: {},
})
export default info3Slice.reducer;