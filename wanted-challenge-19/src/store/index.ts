import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./rootReducer";

export const store = configureStore({ reducer: { toDo: toDoSlice } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
