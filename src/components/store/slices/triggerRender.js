import { createSlice } from "@reduxjs/toolkit";

const TriggeringRenderingSlice = createSlice({
  name: "triggeringrendering",
  initialState: {
    rendering: 0, 
  },
  reducers: {
    triggerRender: (state) => {
      state.rendering += 1;
    },
  },
});

export const {  triggerRender } = TriggeringRenderingSlice.actions;

export default TriggeringRenderingSlice.reducer;