import { useContext } from "react"
import { useAppSelector } from "../hooks/redux"
import { FilterContext } from "../context"
import { IFilter } from "../interfaces/filters.interface"

const FilterBrands:React.FC = () => {
  const { filtersBrands } = useAppSelector(state => state.filters)

  const { setFilterBrands } = useContext(FilterContext)

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number, filter: string) => {
    if (event.target.checked) {
      setFilterBrands((prev: IFilter[]) => [...prev, { id: id, filter: filter }])
    } else {
      setFilterBrands((prev: IFilter[]) => prev.filter(item => item.id !== id))
    }
  }

  return (
    <div className="filter-brands filter-wrapper">
      <h2>Бренд</h2>
      <ul className="filter-brands__list">
        { filtersBrands.map(filter => <li key={filter.id}><input type="checkbox" onChange={(e) => filterHandler(e, filter.id, filter.filter)}/>{filter.filter}</li>) }
      </ul>
    </div>
  )
}

export default FilterBrands