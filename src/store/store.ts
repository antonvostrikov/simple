import { configureStore } from "@reduxjs/toolkit";
import getProductsSlice from './slices/getProductsSlice'
import getFiltersSlice from "./slices/getFiltersSlice";

export const store = configureStore({
  reducer: {
    products: getProductsSlice,
    filters: getFiltersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch