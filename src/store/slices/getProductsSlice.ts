import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProducts } from "../../interfaces/product.interface";
import axios from "axios";

const initialState: IProducts = {
  products: []
}

export const getProductsQuery = createAsyncThunk<IProduct[]>(
  'products/getProductsQuery',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/products')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const getProductsSlice = createSlice({
  name: 'getProduct',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductsQuery.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export default getProductsSlice.reducer

