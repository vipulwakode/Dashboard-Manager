import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
console.log(dashboardReducer, "dashboardReducer");

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
});