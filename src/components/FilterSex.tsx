import { useAppSelector } from "../hooks/redux"

const FilterSex:React.FC = () => {
  const { filtersSex } = useAppSelector(state => state.filters)

  return (
    <div className="filter-sex filter-wrapper">
      <h2>Пол</h2>
      <ul className="filter-sex__list">
        { filtersSex.map(filter => <li key={filter.id}><input type="checkbox" />{filter.filter}</li>) }
      </ul>
    </div>
  )
}

export default FilterSex