import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
    title: 'Premium Facilities',
    description: 'Indulge in Excellence: Experience Our Premium Facilities. From state-of-the-art equipment to luxurious amenities, Goodlyfe offers an unparalleled fitness experience tailored to elevate your journey to wellness.',
    btn: 'Learn more',
}

const info2Slice = createSlice({
    name: 'info2',
    initialState: initialStateValue,
    reducers: {},
})
export default info2Slice.reducer;