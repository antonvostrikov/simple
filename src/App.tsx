import { useEffect, useState } from 'react';
import { getProductsQuery } from './store/slices/getProductsSlice';
import { useAppDispatch } from './hooks/redux';
import Products from './components/Products';
import { getBrands, getCountries, getSex } from './store/slices/getFiltersSlice';
import Filter from './components/Filter';

import { FilterContext } from './context';

function App() {
  const dispatch = useAppDispatch()

  const [filterSex, setFilterSex] = useState([])
  const [filterBrands, setFilterBrands] = useState([])
  const [filterCountries, setFilterCountries] = useState([])

  useEffect(() => {
    dispatch(getProductsQuery({ filterBrands, filterCountries, filterSex }))
    dispatch(getBrands())
    dispatch(getCountries())
    dispatch(getSex())
  }, [dispatch, filterBrands, filterCountries, filterSex])

  return (
    <FilterContext.Provider value={{
        filterBrands, 
        filterCountries,
        filterSex,
        setFilterBrands,
        setFilterCountries,
        setFilterSex
      }}>
      <div className="App">
        <Filter />
        <Products />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
