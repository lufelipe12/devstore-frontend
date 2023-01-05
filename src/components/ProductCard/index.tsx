import { RiShoppingBasketLine } from "react-icons/ri"

import Button from "../Button"
import {
  ProductCardContainer,
  StyledSection,
  StyledSpan,
  StyledTitle,
} from "./styles"
import textAdapter from "../../utils/textAdapter"
import { useItems } from "../../providers/Item"
import { useEffect } from "react"
import { useUsers } from "../../providers/Users"
import { useAuth } from "../../providers/Auth"

interface ProductCardProps {
  name: string
  image: string
  description: string
  hasDiscount: boolean
  discountValue?: number
  price: number
  provider: string
}

const ProductCard = ({
  name,
  image,
  description,
  hasDiscount,
  discountValue,
  price,
  provider,
}: ProductCardProps) => {
  const { createItem, item } = useItems()
  const { getProfile, user } = useUsers()
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    if (item && isLoggedIn) {
      getProfile()
    }
  }, [item])

  const itemObject = {
    name,
    img: image,
    price: +price,
    provider,
    hasDiscount,
  }

  return (
    <ProductCardContainer>
      <img src={image} />
      <StyledSection>
        <StyledTitle>{name}</StyledTitle>
        <div>
          <StyledSpan>{`R$ ${Number(price)}`}</StyledSpan>
        </div>
      </StyledSection>
      <p>{textAdapter(description, 70)}</p>
      <div>
        <Button onClick={() => createItem(itemObject)}>
          {" "}
          <RiShoppingBasketLine />
          Comprar
        </Button>
      </div>
    </ProductCardContainer>
  )
}

export default ProductCard
