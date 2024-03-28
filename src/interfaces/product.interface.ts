interface ISlider {
  img: string
}

export interface IProduct {
  id: number,
  sex: string
  brand: string
  name: string
  price: number,
  imageUrl: string
  description: string
  country: string
  model: string
  type: string
  dial: string
  band: string
  waterproof: string
  dimensions: string
  categoryType: string
  sliderImages: ISlider[]
  rating: number
  product: string
}

export interface IProducts {
  products: IProduct[]
}