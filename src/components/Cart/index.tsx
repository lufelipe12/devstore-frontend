import { AiFillCloseCircle } from "react-icons/ai"
import Button from "../Button"
import { CartAside, FinishDiv, PriceDiv, TitleDiv } from "./styles"

interface CartProps {
  isCartOpen: boolean
  cartStateManager: () => void
}

const Cart = ({ isCartOpen, cartStateManager }: CartProps) => {
  console.log(isCartOpen)
  return (
    <CartAside isCartOpen={isCartOpen}>
      <TitleDiv>
        <h2>Carrinho de compras</h2>
        <AiFillCloseCircle onClick={cartStateManager} cursor={"pointer"} />
      </TitleDiv>
      <section></section>
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
