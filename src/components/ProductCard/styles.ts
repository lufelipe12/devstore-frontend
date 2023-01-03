import styled from "styled-components"

export const ProductCardContainer = styled.div`
  width: 240px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 100px auto;
  padding: 5px;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 9px 0px rgba(133, 143, 135, 1);
  -moz-box-shadow: 0px 0px 9px 0px rgba(133, 143, 135, 1);
  box-shadow: 0px 0px 9px 0px rgba(133, 143, 135, 1);

  img {
    border-radius: 6px 6px 0px 0px;
  }

  p {
    font-size: 12px;
    font-weight: 200;
  }

  button {
    border-radius: 0px 0px 6px 6px;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`

export const StyledTitle = styled.h3`
  font-size: 16px;
  width: 60%;
`

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledSpan = styled.span`
  color: var(--white-0);
  background-color: var(--green-dark);
  padding: 3px;
  border-radius: 4px;
`
