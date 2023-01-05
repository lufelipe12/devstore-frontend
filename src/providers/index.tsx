import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { ItemProvider } from "./Item"

import { ProductsProvider } from "./Products"
import { UserProvider } from "./Users"

interface AppProvider {
  children: ReactNode
}

const Provider = ({ children }: AppProvider) => {
  return (
    <ItemProvider>
      <AuthProvider>
        <UserProvider>
          <ProductsProvider>{children}</ProductsProvider>
        </UserProvider>
      </AuthProvider>
    </ItemProvider>
  )
}

export default Provider
