import { useContext } from "react"
import { useAppSelector } from "../hooks/redux"
import { FilterContext } from "../context"
import { IFilter } from "../interfaces/filters.interface"

const FilterCountries:React.FC = () => {
  const { filtersCountries } = useAppSelector(state => state.filters)
  
  const { setFilterCountries } = useContext(FilterContext)

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number, filter: string) => {
    if (event.target.checked) {
      setFilterCountries((prev: IFilter[]) => [...prev, { id: id, filter: filter }])
    } else {
      setFilterCountries((prev: IFilter[]) => prev.filter(item => item.id !== id))
    }
  }

  return (
    <div className="filter-countries filter-wrapper">
      <h2>Страна</h2>
      <ul className="filter-countries__list">
        { filtersCountries.map(filter => <li key={filter.id}><input type="checkbox" onChange={(e) => filterHandler(e, filter.id, filter.filter)} />{filter.filter}</li>) }
      </ul>
    </div>
  )
}

export default FilterCountries