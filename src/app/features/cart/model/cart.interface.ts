export interface Cart {
    status: string
    numOfCartItems: number
    cartId: string
    data: Data
  }
  
  export interface Data {
    cartOwner: string
    products: Product[]
    createdAt: string
    updatedAt: string
    totalCartPrice: number
  }
  
  export interface Product {
    count: number
    product: Product2
    price: number
  }
  
  export interface Product2 {
    subcategory: Subcategory[]
    _id: string
    title: string
    quantity: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    id: string
  }
  
  export interface Subcategory {
    _id: string
    name: string
    slug: string
    category: string
  }
  
  export interface Category {
    _id: string
    name: string
    slug: string
    image: string
  }
  
  export interface Brand {
    _id: string
    name: string
    slug: string
    image: string
  }
  