import { TextField } from "@mui/material"
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri"
import { FaRegSadTear } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

import ProductCard from "../../components/ProductCard"
import {
  ArrowDiv,
  ArrowsDiv,
  ArrowsMobileDiv,
  Container,
  InputDiv,
  NotFoundText,
  StyledMain,
} from "./styles"
import { useProducts } from "../../providers/Products"

const HomePage = () => {
  const pageLimit = 12

  const { register, handleSubmit } = useForm()
  const [name, setName] = useState("")
  const { productsData, getProductsData } = useProducts()

  useEffect(() => {
    if (name !== "") {
      getProductsData(1, pageLimit, name)
    } else {
      getProductsData(1, pageLimit)
    }
  }, [name])

  const isNextPageExists = (
    currentPage?: number,
    totalPages?: number
  ): boolean => {
    if (totalPages == 0) {
      return false
    }
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
      return await getProductsData(
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
      return await getProductsData(
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
            (
              { name, image, description, price, hasDiscount, provider },
              index
            ) => {
              return (
                <ProductCard
                  key={index}
                  name={name}
                  image={image}
                  description={description}
                  price={price}
                  hasDiscount={hasDiscount}
                  provider={provider}
                />
              )
            }
          )}
      </StyledMain>
      <ArrowsMobileDiv>
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
      </ArrowsMobileDiv>
      {productsData?.products.length == 0 && (
        <NotFoundText>
          Nada encontrado... <FaRegSadTear />
        </NotFoundText>
      )}
    </Container>
  )
}

export default HomePage
