import { RiShoppingBasketLine } from "react-icons/ri"

import Button from "../Button"
import {
  ProductCardContainer,
  StyledSection,
  StyledSpan,
  StyledTitle,
} from "./styles"

const ProductCard = () => {
  const {
    name,
    image,
    description,
    hasDiscount,
    discountValue,
    price,
    provider,
  } = {
    name: "Refined Plastic Bike",
    image: "http://placeimg.com/640/480/business",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    hasDiscount: false,
    discountValue: null,
    price: "127.00",
    provider: "Brazil",
  }

  return (
    <ProductCardContainer>
      <img src={image} />
      <StyledSection>
        <StyledTitle>{name}</StyledTitle>
        <div>
          <StyledSpan>{`R$ ${parseInt(price)}`}</StyledSpan>
        </div>
      </StyledSection>
      <p>{description}</p>
      <Button>
        {" "}
        <RiShoppingBasketLine />
        Comprar
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
