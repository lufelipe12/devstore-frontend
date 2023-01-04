import { RiShoppingBasketLine } from "react-icons/ri"

import Button from "../Button"
import {
  ProductCardContainer,
  StyledSection,
  StyledSpan,
  StyledTitle,
} from "./styles"
import textAdapter from "../../utils/textAdapter"

interface ProductCardProps {
  name: string
  image: string
  description: string
  hasDiscount?: boolean
  discountValue?: number
  price: number
  provider?: string
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
        <Button>
          {" "}
          <RiShoppingBasketLine />
          Comprar
        </Button>
      </div>
    </ProductCardContainer>
  )
}

export default ProductCard
