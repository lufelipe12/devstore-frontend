import styled from "styled-components"

export const CartDiv = styled.div`
  min-height: 80px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white-0);
  border-radius: 8px;
  padding: 0px 10px;
  position: relative;

  svg {
    color: var(--green-dark);
    position: absolute;
    top: -5px;
    right: -5px;

    :hover {
      cursor: pointer;
      color: black;
    }
  }

  img {
    height: 50px;
    width: 50px;
  }
`

export const ProductCounterSection = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
`

export const ProductCounterDiv = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid var(--white-200);
  border-radius: 5px;
  color: var(--green-dark);
  font-size: 13px;

  div:hover {
    cursor: pointer;
  }
`

export const StyledName = styled.p`
  color: var(--green-dark);
  font-weight: 500;
  font-size: 13px;
  width: 65px;
`

export const StyledInfo = styled.h5`
  color: var(--green-dark);
  font-size: 6px;
  font-weight: 300;
`

export const StyledPrice = styled.span`
  color: var(--green-dark);
  font-size: 14px;
  font-weight: bold;
`
