import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProducts } from "../../interfaces/product.interface";
import axios from "axios";
import { IFilter } from "../../interfaces/filters.interface";

const initialState: IProducts = {
  products: []
}

interface IParams {
  filterBrands: IFilter[]
  filterCountries: IFilter[]
  filterSex: IFilter[]
}

export const getProductsQuery = createAsyncThunk<IProduct[], IParams>(
  'products/getProductsQuery',
  async (params) => {
    const { filterBrands, filterCountries, filterSex } = params

    let brands = filterBrands.length === 0 ? '' : `&brand=${filterBrands.map(filter => filter.filter).join('&brand=')}`
    let countries = filterCountries.length === 0 ? '' : filterBrands.map(filter => filter.filter).join()
    let sex = filterSex.length === 0 ? '' : filterBrands.map(filter => filter.filter).join()

    console.log(brands)

    try {
      const { data } = await axios.get(`http://localhost:3001/products?${brands}`)

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

