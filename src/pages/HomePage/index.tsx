import { TextField } from "@mui/material"
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri"

import ProductCard from "../../components/ProductCard"
import { products } from "../../providers/products"
import { ArrowDiv, ArrowsDiv, Container, InputDiv, StyledMain } from "./styles"

const HomePage = () => {
  return (
    <Container>
      <InputDiv>
        <TextField
          color="success"
          id="outlined-basic"
          label="Pesquise pelo nome"
          variant="outlined"
          size="small"
          focused
        />
        <ArrowsDiv>
          <ArrowDiv>
            <RiArrowLeftFill />
          </ArrowDiv>
          <ArrowDiv>
            <RiArrowRightFill />
          </ArrowDiv>
        </ArrowsDiv>
      </InputDiv>
      <StyledMain>
        {products.map(({ name, image, description, price }) => {
          return (
            <ProductCard
              name={name}
              image={image}
              description={description}
              price={price}
            />
          )
        })}
      </StyledMain>
    </Container>
  )
}

export default HomePage
