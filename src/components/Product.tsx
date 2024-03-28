import { IProduct } from "../interfaces/product.interface"

const Product:React.FC<IProduct> = ({ imageUrl, name, price }) => {
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-item__title">
        <h3>{name}</h3>
      </div>
      <div className="product-item__price">
        <span>{price} рублей</span>
      </div>
    </div>
  )
}

export default Product