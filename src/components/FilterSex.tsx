import { useContext } from "react"
import { useAppSelector } from "../hooks/redux"
import { FilterContext } from "../context"
import { IFilter } from "../interfaces/filters.interface"

const FilterSex:React.FC = () => {
  const { filtersSex } = useAppSelector(state => state.filters)

  const { setFilterSex } = useContext(FilterContext)
  
  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>, id: number, filter: string) => {
    if (event.target.checked) {
      setFilterSex((prev: IFilter[]) => [...prev, { id: id, filter: filter }])
    } else {
      setFilterSex((prev: IFilter[]) => prev.filter(item => item.id !== id))
    }
  }

  return (
    <div className="filter-sex filter-wrapper">
      <h2>Пол</h2>
      <ul className="filter-sex__list">
        { filtersSex.map(filter => <li key={filter.id}><input type="checkbox" onChange={(e) => filterHandler(e, filter.id, filter.filter)} />{filter.filter}</li>) }
      </ul>
    </div>
  )
}

export default FilterSex