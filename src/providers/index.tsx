import { ReactNode } from "react"

import { ProductsProvider } from "./Products"
import { UserProvider } from "./Users"

interface AppProvider {
  children: ReactNode
}

const Provider = ({ children }: AppProvider) => {
  return (
    <UserProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UserProvider>
  )
}

export default Provider
