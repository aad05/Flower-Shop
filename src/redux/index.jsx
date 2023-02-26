import { configureStore } from "@reduxjs/toolkit";
import Slices from "./slice";

export default configureStore({
  reducer: {
    data: Slices,
  },
});
