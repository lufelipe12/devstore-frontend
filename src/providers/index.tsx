import { ReactNode } from "react"
import { AuthProvider } from "./Auth"

import { ProductsProvider } from "./Products"
import { UserProvider } from "./Users"

interface AppProvider {
  children: ReactNode
}

const Provider = ({ children }: AppProvider) => {
  return (
    <AuthProvider>
      <UserProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default Provider
