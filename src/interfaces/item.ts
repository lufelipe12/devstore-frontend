export interface Item {
  id: number
  name: string
  img: string
  price: number
  provider: string
  hasDiscount: boolean
}

export interface ItemToCreate {
  name: string
  img: string
  price: number
  provider: string
  hasDiscount: boolean
}
