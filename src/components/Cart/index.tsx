import { useEffect } from "react"
import { AiFillCloseCircle } from "react-icons/ai"
import { useAuth } from "../../providers/Auth"
import { usePurchases } from "../../providers/Purchase"
import { useUsers } from "../../providers/Users"
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
  const { userLoggedIn } = useAuth()
  const { getProfile } = useUsers()
  const { purchaseItems, purchase } = usePurchases()

  useEffect(() => {
    if (purchase) {
      getProfile()
    }
  }, [purchase])

  const { user } = useUsers()
  const usersCart = user?.cart
  const items = usersCart?.items

  return (
    <CartAside isCartOpen={isCartOpen}>
      <TitleDiv>
        <h2>Carrinho de compras</h2>
        <AiFillCloseCircle onClick={cartStateManager} cursor={"pointer"} />
      </TitleDiv>
      <ItemsSection>
        {items &&
          items.map(({ id, img, name, price }, index) => {
            return (
              <ItemCard
                key={index}
                id={id}
                img={img}
                name={name}
                price={+price}
              />
            )
          })}
      </ItemsSection>
      <FinishDiv>
        <PriceDiv>
          <span>Total:</span>
          <span>{`R$ ${items?.reduce(
            (prev, curr) => prev + +curr.price,
            0
          )}`}</span>
        </PriceDiv>
        <Button color="cart" onClick={purchaseItems}>
          Finalizar Compra
        </Button>
      </FinishDiv>
    </CartAside>
  )
}

export default Cart
