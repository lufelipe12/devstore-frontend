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
  getProductsData: (page: number, limit: number, name?: string) => Promise<void>
}

const ProductContext = createContext<ProductsContextData>(
  {} as ProductsContextData
)

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [productsData, setProductsData] = useState()

  const getProductsData = async (page = 1, limit = 8, name?: string) => {
    await apiDevstore
      .get(`products?page=${page}&limit=${limit}&name=${name || ""}`)
      .then((res) => setProductsData(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <ProductContext.Provider value={{ productsData, getProductsData }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)
