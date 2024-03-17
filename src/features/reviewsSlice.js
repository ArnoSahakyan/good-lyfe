import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  title: 'Real Stories from Real Customers',
  subtitle: 'Be inspired with these experiences.',
  users: [
    {
      review: '3Kg lost!',
      body: "Joining Goodlyfe was the best decision I made for my health. In just a short time, I've shed 3kg and gained so much confidence. The supportive community and effective workouts truly make a difference!",
      name: 'James John',
      condition: 'Father of three',
      pic: '/user1.jpg',
      classname: 'user1'
    },
    {
      review: '17Kg lost!',
      body: "I can't thank Goodlyfe enough for helping me achieve my weight loss goals. With their expert guidance and motivating environment, I've lost a remarkable 17kg! It's not just about the numbers; it's about reclaiming my life.",
      name: 'Mary Patricia',
      condition: 'Mother of two',
      pic: '/user2.jpg',
      classname: 'user2'
    },
    {
      review: '43Kg lost!',
      body: "Goodlyfe transformed me, shedding 43kg. Holistic support was crucial.",
      name: 'Amanda Smith',
      condition: 'Mother of four',
      pic: '/user3.jpg',
      classname: 'user3'
    }
  ]
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: initialStateValues,
  reducers: {},
})

export default reviewsSlice.reducer;