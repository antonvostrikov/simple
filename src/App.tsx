import { useEffect } from 'react';
import { getProductsQuery } from './store/slices/getProductsSlice';
import { useAppDispatch } from './hooks/redux';
import Products from './components/Products';
import { getBrands, getCountries, getSex } from './store/slices/getFiltersSlice';
import Filter from './components/Filter';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProductsQuery())
    dispatch(getBrands())
    dispatch(getCountries())
    dispatch(getSex())
  }, [])

  return (
    <div className="App">
      <Filter />
      <Products />
    </div>
  );
}

export default App;
