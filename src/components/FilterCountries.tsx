import { useAppSelector } from "../hooks/redux"

const FilterCountries:React.FC = () => {
  const { filtersCountries } = useAppSelector(state => state.filters)
  
  return (
    <div className="filter-countries filter-wrapper">
      <h2>Страна</h2>
      <ul className="filter-countries__list">
        { filtersCountries.map(filter => <li key={filter.id}><input type="checkbox" />{filter.filter}</li>) }
      </ul>
    </div>
  )
}

export default FilterCountries