import { createContext } from "react";
import { IFilter } from "./interfaces/filters.interface";

export const FilterContext = createContext({
  filterBrands: [],
  filterCountries: [],
  filterSex: [],
  setFilterBrands: (brands: any) => {},
  setFilterSex: (sex: any) => {},
  setFilterCountries: (countries: any) => {}
})