import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: var(--green-1);
  width: 100%;
  height: 80px;
  color: var(--white-0);
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  h1:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 25px;
    padding: 20px 40px;
  }
`

export const StyledDiv = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 90px;
  }
`
interface StyledCartDivProps {
  isCartOpen: boolean
}

export const LogoutCartDiv = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column-reverse;
  height: 65px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 110px;
  }
`

export const StyledCartDiv = styled.div<StyledCartDivProps>`
  width: 30px;
  height: 30px;

  ${(props) => {
    if (!props.isCartOpen) {
      return `
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  
    `
    } else {
      return `
      display: none;

    `
    }
  }}
  color: var(--green-dark);
  font-weight: 600;
  background-color: var(--white-0);
  border-radius: 8px;

  :hover {
    cursor: pointer;
    background-color: var(--white-200);
    transition: 0.5s;
  }

  span {
    display: none;
  }

  @media (min-width: 768px) {
    span {
      display: block;
      font-size: 16px;
    }

    width: 70px;
    height: 35px;
  }
`
