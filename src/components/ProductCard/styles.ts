import styled from "styled-components"

export const ProductCardContainer = styled.div`
  width: 240px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  border: 2px solid var(--white-200);

  img {
    border-radius: 6px 6px 0px 0px;
    padding: 5px;
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
  background-color: var(--green-dark);
  padding: 3px;
  border-radius: 4px;
  margin: 0px 5px;
`
