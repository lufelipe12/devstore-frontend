import ProductCard from "../../components/ProductCard"
import { products } from "../../providers/products"
import { StyledMain } from "./styles"

const HomePage = () => {
  return (
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
  )
}

export default HomePage
