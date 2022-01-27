import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../features/user/userSlice"
import movieReducers from '../features/movie/movieSlice'


export const store = configureStore({
  reducer: {
    movie : movieReducers,
    user: userSlice
  },
});
