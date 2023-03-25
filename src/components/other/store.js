import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { barangSLI } from "../dashboard/barang/barangSlice";

const rootReducer = combineReducers({
  barang: barangSLI,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export default store;
