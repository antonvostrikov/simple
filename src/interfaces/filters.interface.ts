export interface IFilter {
  id: number
  filter: string
}

export interface IFiltersState {
  filtersBrands: IFilter[]
  filtersCountries: IFilter[]
  filtersSex: IFilter[]
}