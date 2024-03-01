import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

const initialState = {
  content: "",
  list: Array<string>(),
  length: 0,
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    onChange: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    addItem: (state) => {
      state.list = [...state.list, state.content];
      state.content = "";
      state.length += 1;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((value, index) => {
        if (index !== action.payload) {
          return value;
        }
      });
      state.length -= 1;
    },
  },
});

export const { onChange, addItem, deleteItem } = toDoSlice.actions;

export const listValues = (state: RootState) => state.toDo.list;
export const contentValue = (state: RootState) => state.toDo.content;
export const lengthValue = (state: RootState) => state.toDo.length;

export default toDoSlice.reducer;
