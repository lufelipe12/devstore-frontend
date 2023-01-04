import { TextField } from "@mui/material"
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

import ProductCard from "../../components/ProductCard"
import { ArrowDiv, ArrowsDiv, Container, InputDiv, StyledMain } from "./styles"
import { useProducts } from "../../providers/Products"

const HomePage = () => {
  const pageLimit = 8

  const { register, handleSubmit } = useForm()
  const [name, setName] = useState("")
  const { productsData, getAllProductsData } = useProducts()

  useEffect(() => {
    if (name !== "") {
      getAllProductsData(1, pageLimit, name)
    } else {
      getAllProductsData(1, pageLimit)
    }
  }, [name])

  const isNextPageExists = (
    currentPage?: number,
    totalPages?: number
  ): boolean => {
    return currentPage !== totalPages
  }

  const isPreviousPageExists = (currentPage?: number): boolean => {
    const result = !!currentPage && currentPage > 1
    return result
  }

  const goToNextPage = async () => {
    const currentPage = productsData?.page
    const totalPages = productsData?.totalPages

    if (isNextPageExists(currentPage, totalPages)) {
      const nextPage = currentPage && currentPage + 1
      return await getAllProductsData(
        nextPage || 1,
        pageLimit,
        name !== "" ? name : ""
      )
    }
  }

  const backToPreviousPage = async () => {
    const currentPage = productsData?.page

    if (isPreviousPageExists(currentPage)) {
      const previousPage = currentPage && currentPage - 1
      return await getAllProductsData(
        previousPage || 1,
        pageLimit,
        name !== "" ? name : ""
      )
    }
  }

  return (
    <Container>
      <InputDiv>
        <form onSubmit={handleSubmit((data) => setName(data.name))}>
          <TextField
            color="success"
            id="outlined-basic"
            label="Pesquise pelo nome"
            variant="outlined"
            size="small"
            focused
            type="text"
            {...register("name")}
          />
        </form>
        <ArrowsDiv>
          <ArrowDiv pageExists={isPreviousPageExists(productsData?.page)}>
            <RiArrowLeftFill onClick={backToPreviousPage} />
          </ArrowDiv>
          <ArrowDiv
            pageExists={isNextPageExists(
              productsData?.page,
              productsData?.totalPages
            )}
          >
            <RiArrowRightFill onClick={goToNextPage} />
          </ArrowDiv>
        </ArrowsDiv>
      </InputDiv>
      <StyledMain>
        {productsData &&
          productsData.products.map(
            ({ name, image, description, price }, index) => {
              return (
                <ProductCard
                  key={index}
                  name={name}
                  image={image}
                  description={description}
                  price={price}
                />
              )
            }
          )}
      </StyledMain>
    </Container>
  )
}

export default HomePage
