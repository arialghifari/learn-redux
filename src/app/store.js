import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "../reducers/walletSlice";
import { colorsApi } from "../services/colorsApi";

const store = configureStore({
  reducer: {
    wallet: walletSlice,
    [colorsApi.reducerPath]: colorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(colorsApi.middleware),
});

export default store;
