import { useEffect, useState } from "react"
import { AiFillCloseCircle } from "react-icons/ai"

import {
  CartDiv,
  ProductCounterDiv,
  StyledInfo,
  StyledName,
  StyledPrice,
} from "./styles"
import textAdapter from "../../utils/textAdapter"
import { useUsers } from "../../providers/Users"
import { useItems } from "../../providers/Item"
import { useAuth } from "../../providers/Auth"

interface ItemCardProps {
  id: number
  name: string
  price: number
  img: string
}

const ItemCard = ({ id, img, name, price }: ItemCardProps) => {
  const [counter, setCounter] = useState(1)
  const { deleteItem, item } = useItems()
  const { getProfile } = useUsers()
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    if (item && isLoggedIn) {
      getProfile()
    }
  }, [item])

  const addCounter = () => {
    return setCounter(counter + 1)
  }

  const subCounter = () => {
    if (counter > 1) {
      return setCounter(counter - 1)
    }
  }

  return (
    <CartDiv>
      <img src={img} />
      <StyledName>{textAdapter(name, 14)}</StyledName>
      <section>
        <StyledInfo>Qtd:</StyledInfo>
        <ProductCounterDiv>
          <div onClick={subCounter}>-</div>
          <span>{counter}</span>
          <div onClick={addCounter}>+</div>
        </ProductCounterDiv>
      </section>
      <StyledPrice>{`R$ ${price}`}</StyledPrice>
      <AiFillCloseCircle onClick={() => deleteItem(id)} />
    </CartDiv>
  )
}

export default ItemCard
