import { useAppSelector } from "../hooks/redux"
import Product from "./Product"

const Products:React.FC = () => {
  const { products } = useAppSelector(state => state.products)

  return (
    <div className="products-wrapper">
      { products.map(product => <Product key={product.id} {...product} />) }
    </div>
  )
}

export default Products