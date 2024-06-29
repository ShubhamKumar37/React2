import { configureStore } from '@reduxjs/toolkit'
import modeReducer from "./display_mode/displayMode";


export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});