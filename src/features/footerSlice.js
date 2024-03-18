import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = {
  description: 'Join us in our state-of-the-art facility for personalized workouts, group classes, and expert guidance towards achieving your health and wellness goals.',
  categories: [
    {
      title: 'Quick Links',
      subtitles: ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free Trial']
    },
    {
      title: 'Guides',
      subtitles: ['Weight Loss', 'Strength Gain', 'Crossfit', 'Washbaord Abs', 'Dieting']
    }
  ],
  copyright: '© 2024 GoodLyfe. All rights reserved',
  links: ['Terms & Conditions', 'Privacy Policy', 'Sitemap', 'Disclaimer']
}

const footerSlice = createSlice({
  name: 'footer',
  initialState: initialStateValue,
  reducers: {},
})
export default footerSlice.reducer;