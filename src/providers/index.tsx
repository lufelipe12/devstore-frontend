import { ReactNode } from "react"

import { ProductsProvider } from "./Products"

interface AppProvider {
  children: ReactNode
}

const Provider = ({ children }: AppProvider) => {
  return <ProductsProvider>{children}</ProductsProvider>
}

export default Provider
