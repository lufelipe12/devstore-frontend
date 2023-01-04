import { createContext, ReactNode, useContext, useState } from "react"

import apiDevstore from "../../services/apiDevstore"

interface ProductsProps {
  children: ReactNode
}

interface ProductData {
  name: string
  image: string
  description: string
  hasDiscount: boolean
  discountValue: number | null
  price: number
  provider: string
}

interface ProductsResponse {
  count: number
  page: number
  totalPages: number
  products: ProductData[]
}

interface ProductsContextData {
  productsData: ProductsResponse | undefined
  getAllProductsData: (
    page?: number,
    limit?: number,
    name?: string
  ) => Promise<void>
}

const ProductContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [productsData, setProductsData] = useState()

  const getAllProductsData = async (
    page?: number,
    limit?: number,
    name?: string
  ) => {
    await apiDevstore
      .get("products")
      .then((res) => setProductsData(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <ProductContext.Provider value={{ productsData, getAllProductsData }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)