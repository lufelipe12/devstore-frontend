import { createContext, ReactNode, useContext, useState } from "react"
import { toast } from "react-toastify"

import apiDevstore from "../../services/apiDevstore"
import { Item, ItemToCreate } from "../../interfaces/item"
import { toastOptions } from "../../configs/react-toast.config"

interface ItemProps {
  children: ReactNode
}

interface ItemsContextData {
  item?: Item
  createItem: (newItem: ItemToCreate) => Promise<void>
  deleteItem: (id: number) => Promise<void>
}

const ItemContext = createContext<ItemsContextData>({} as ItemsContextData)

export const ItemProvider = ({ children }: ItemProps) => {
  const [item, setItem] = useState()

  const createItem = async (newItem: ItemToCreate) => {
    apiDevstore
      .post("items", newItem, { withCredentials: true })
      .then((res) => {
        toast.success("Item adicionado no carrinho", toastOptions)
        return setItem(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions)
      })
  }

  const deleteItem = async (id: number) => {
    apiDevstore
      .delete(`items/${id}`, { withCredentials: true })
      .then((res) => {
        toast.success("Item deletado com sucesso", toastOptions)
        return setItem(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions)
      })
  }

  return (
    <ItemContext.Provider value={{ createItem, deleteItem, item }}>
      {children}
    </ItemContext.Provider>
  )
}

export const useItems = () => useContext(ItemContext)
