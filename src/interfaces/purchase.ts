import { Item } from "./item"
import { User } from "./user"

export interface Purchase {
  id: number
  total: number
  createdAt: Date
  items: Item[]
  user: User
}
