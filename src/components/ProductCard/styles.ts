import styled from "styled-components"

export const ProductCardContainer = styled.div`
  width: 220px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: -1px 0px 5px 1px rgba(102, 102, 102, 0.55);
  -webkit-box-shadow: -1px 0px 5px 1px rgba(102, 102, 102, 0.55);
  -moz-box-shadow: -1px 0px 5px 1px rgba(102, 102, 102, 0.55);

  img {
    border-radius: 6px 6px 0px 0px;
  }

  p {
    font-size: 12px;
    font-weight: 200;
    padding: 0px 5px;
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
  margin: 0px 5px;
`

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledSpan = styled.span`
  color: var(--white-0);
  font-size: 15px;
  font-weight: 700;
  background-color: var(--green-dark);
  padding: 3px;
  border-radius: 4px;
  margin: 0px 5px;
`
