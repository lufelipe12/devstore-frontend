import styled from "styled-components"

export const Container = styled.div`
  width: 65%;
  min-height: 250px;
  margin: 35px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const SearchDiv = styled.div`
  height: 50px;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 15px 0px;
  }
`
export const FilterContainer = styled.div`
  display: flex;
`

interface OnSaleDivProps {
  hasDiscount: boolean
}

export const OnSaleDiv = styled.div<OnSaleDivProps>`
  margin: 12px 0px 0px 20px;
  font-size: 20px;
  text-align: center;
  ${(props) => {
    if (props.hasDiscount) {
      return `color: var(--white-200);`
    } else {
      return `color: var(--green-1);`
    }
  }}
  :hover {
    cursor: pointer;
  }
`

export const ArrowsDiv = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ArrowsMobileDiv = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;

  @media (min-width: 768px) {
    display: none;
  }
`

interface ArrowDivProps {
  pageExists: boolean
}

export const ArrowDiv = styled.div<ArrowDivProps>`
  width: 23px;
  height: 23px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 20px;

  ${(props) => {
    if (!props.pageExists) {
      return `
      color: var(--white-200);
      border: 1px solid var(--white-200);
      `
    } else {
      return `
      color: var(--green-0);
      border: 1px solid var(--green-0);
      :hover {
        cursor: pointer;
        background-color: var(--white-200);
        transition: 0.3s;
      }
      `
    }
  }}
`

export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
`

export const NotFoundText = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--green-dark);
  text-align: center;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`
