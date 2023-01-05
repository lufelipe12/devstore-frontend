import { createContext, ReactNode, useContext, useState } from "react"
import { toast } from "react-toastify"
import { toastOptions } from "../../configs/react-toast.config"
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
      .post("purchases", null, { withCredentials: true })
      .then((res) => {
        toast.success("Compra realizada!", toastOptions)
        setPurchase(res.data)
      })
      .catch((err) => {
        toast.error("Ops, algo deu errado com a compra.", toastOptions)
        console.log(err)
      })
  }

  return (
    <PurchaseContext.Provider value={{ purchaseItems, purchase }}>
      {children}
    </PurchaseContext.Provider>
  )
}

export const usePurchases = () => useContext(PurchaseContext)
