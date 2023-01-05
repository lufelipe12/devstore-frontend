import { createContext, ReactNode, useContext, useState } from "react"
import { toast } from "react-toastify"
import { Purchase } from "../../interfaces/purchase"

import apiDevstore from "../../services/apiDevstore"

interface PurchaseProps {
  children: ReactNode
}

interface PurchaseContextData {
  purchase?: Purchase
  purchaseItems: () => Promise<void>
}

const PurchaseContext = createContext<PurchaseContextData>(
  {} as PurchaseContextData
)

export const PurchaseProvider = ({ children }: PurchaseProps) => {
  const [purchase, setPurchase] = useState<Purchase>()

  const purchaseItems = async () => {
    apiDevstore
      .post("purchase", null, { withCredentials: true })
      .then((res) => {
        toast.success("Compra realizada!", { position: "bottom-right" })
        setPurchase(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message, { position: "bottom-right" })
        console.log(err)
      })
  }

  return (
    <PurchaseContext.Provider value={{ purchaseItems, purchase }}>
      {children}
    </PurchaseContext.Provider>
  )
}
