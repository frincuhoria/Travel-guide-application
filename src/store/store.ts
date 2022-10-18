import { reducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: reducer
});

export type RootState = ReturnType<typeof store.getState>;





