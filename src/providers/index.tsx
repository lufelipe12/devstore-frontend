import { ReactNode } from "react"
import { AuthProvider } from "./Auth"
import { ItemProvider } from "./Item"

import { ProductsProvider } from "./Products"
import { PurchaseProvider } from "./Purchase"
import { UserProvider } from "./Users"

interface AppProvider {
  children: ReactNode
}

const Provider = ({ children }: AppProvider) => {
  return (
    <PurchaseProvider>
      <ItemProvider>
        <AuthProvider>
          <UserProvider>
            <ProductsProvider>{children}</ProductsProvider>
          </UserProvider>
        </AuthProvider>
      </ItemProvider>
    </PurchaseProvider>
  )
}

export default Provider
