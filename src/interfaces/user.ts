import { Cart } from "./cart"

export interface UserToCreate {
  name: string
  email: string
  password: string
}

export interface User {
  id: number
  name: string
  email: string
  createdAt: Date
  cart: Cart
}

export interface UserLogin {
  email: string
  password: string
}
