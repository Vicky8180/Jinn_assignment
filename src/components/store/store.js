import { configureStore } from "@reduxjs/toolkit";
import UpdateColor from "./slices/updateColor";
import UpdateFont from "./slices/updateText";
import TriggerRender from "./slices/triggerRender"
const store = configureStore({
  reducer: {
    UpdateColor: UpdateColor,
    UpdateFont: UpdateFont,
    TriggerRender:TriggerRender 
  },
});

export default store;
