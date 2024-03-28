import FilterBrands from "./FilterBrands"
import FilterCountries from "./FilterCountries"
import FilterSex from "./FilterSex"

const Filter:React.FC = () => {
  return (
    <div className="filter-wrapper">
      <FilterSex />
      <FilterBrands />
      <FilterCountries />
    </div>
  )
}

export default Filter