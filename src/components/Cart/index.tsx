import { AiFillCloseCircle } from "react-icons/ai"
import Button from "../Button"
import ItemCard from "../ItemCard"
import {
  CartAside,
  FinishDiv,
  ItemsSection,
  PriceDiv,
  TitleDiv,
} from "./styles"

interface CartProps {
  isCartOpen: boolean
  cartStateManager: () => void
}

const Cart = ({ isCartOpen, cartStateManager }: CartProps) => {
  const items = [
    {
      id: 4,
      name: "motor",
      price: "100",
      provider: "Brazil",
      hasDiscount: true,
      purchase: null,
      img: "http://placeimg.com/640/480/business",
    },
  ]

  return (
    <CartAside isCartOpen={isCartOpen}>
      <TitleDiv>
        <h2>Carrinho de compras</h2>
        <AiFillCloseCircle onClick={cartStateManager} cursor={"pointer"} />
      </TitleDiv>
      <ItemsSection>
        {items.map(({ id, img, name, price }) => {
          return <ItemCard id={id} img={img} name={name} price={+price} />
        })}
      </ItemsSection>
      <FinishDiv>
        <PriceDiv>
          <span>Total:</span>
          <span>R$ 400</span>
        </PriceDiv>
        <Button color="cart">Finalizar Compra</Button>
      </FinishDiv>
    </CartAside>
  )
}

export default Cart
