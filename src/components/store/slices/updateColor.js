

import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  { id: "cb1", color_up: "#01B4ED" },
  { id: "cb2", color_up: "black" }, // title heading
  { id: "cb3", color_up: "rgb(126, 123, 123)" }, // bot background
  { id: "cb4", color_up: "white" }, // bot text
  { id: "cb5", color_up: "black" }, // user back
  { id: "cb6", color_up: "white" }, // user text
];

const UpdateColor = createSlice({
  name: "updatecolor",
  initialState: initialState,
  reducers: {
    changeColor: (state, action) => {
      const { id, color_up } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.color_up = color_up; 
      }
    },
    setDefault: (state) => {
      return initialState.map((item) => ({ ...item })); 
    },
  },
});

export const { changeColor, setDefault } = UpdateColor.actions;
export default UpdateColor.reducer;
