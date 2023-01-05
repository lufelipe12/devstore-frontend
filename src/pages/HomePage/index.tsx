import { TextField } from "@mui/material"
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri"
import { FaRegSadTear } from "react-icons/fa"
import { BsCashCoin } from "react-icons/bs"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { Tooltip } from "@mui/material"

import ProductCard from "../../components/ProductCard"
import {
  ArrowDiv,
  ArrowsDiv,
  ArrowsMobileDiv,
  Container,
  SearchDiv,
  NotFoundText,
  StyledMain,
  OnSaleDiv,
  FilterContainer,
} from "./styles"
import { useProducts } from "../../providers/Products"
import { useAuth } from "../../providers/Auth"
import { useUsers } from "../../providers/Users"
import MotionRoutes from "../../configs/route-motion.config"

const HomePage = () => {
  const pageLimit = 12

  const [hasDiscount, setHasDiscount] = useState(false)

  const { register, handleSubmit } = useForm()
  const [name, setName] = useState("")
  const { productsData, getProductsData } = useProducts()
  const { isLoggedIn } = useAuth()
  const { getProfile } = useUsers()

  useEffect(() => {
    if (isLoggedIn == true) {
      getProfile()
    }
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
        name !== "" ? name : "",
        hasDiscount == true && hasDiscount
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
        name !== "" ? name : "",
        hasDiscount == true && hasDiscount
      )
    }
  }

  const showOnSaleProducts = async () => {
    if (!hasDiscount) {
      await getProductsData(1, 12, "", true)
      setHasDiscount(true)
    } else {
      await getProductsData(1, 12, "")
      setHasDiscount(false)
    }
  }

  return (
    <MotionRoutes>
      <Container>
        <SearchDiv>
          <FilterContainer>
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
            <Tooltip title="Em promoção">
              <OnSaleDiv onClick={showOnSaleProducts} hasDiscount={hasDiscount}>
                <BsCashCoin />
              </OnSaleDiv>
            </Tooltip>
          </FilterContainer>
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
        </SearchDiv>
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
    </MotionRoutes>
  )
}

export default HomePage
