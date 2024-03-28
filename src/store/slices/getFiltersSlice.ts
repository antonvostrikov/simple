import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFiltersState, IFilter } from "../../interfaces/filters.interface";
import axios from "axios";

const initialState: IFiltersState = {
  filtersBrands: [],
  filtersCountries: [],
  filtersSex: []
}

export const getBrands = createAsyncThunk<IFilter[]>(
  'filters/getBrands',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/brands')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getCountries = createAsyncThunk<IFilter[]>(
  'filters/getCountries',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/countries')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getSex = createAsyncThunk<IFilter[]>(
  'filters/getSex',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/sex')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)


const getFiltersSlice = createSlice({
  name: 'getFilters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.filtersBrands = action.payload
    })
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.filtersCountries = action.payload
    })
    builder.addCase(getSex.fulfilled, (state, action) => {
      state.filtersSex = action.payload
    })
  }
})

export default getFiltersSlice.reducer