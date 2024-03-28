import { useAppSelector } from "../hooks/redux"

const FilterBrands:React.FC = () => {
  const { filtersBrands } = useAppSelector(state => state.filters)

  return (
    <div className="filter-brands filter-wrapper">
      <h2>Бренд</h2>
      <ul className="filter-brands__list">
        { filtersBrands.map(filter => <li key={filter.id}><input type="checkbox" />{filter.filter}</li>) }
      </ul>
    </div>
  )
}

export default FilterBrands