import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: var(--green-1);
  width: 100%;
  height: 100px;
  color: var(--white-0);
  font-size: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const StyledCartDiv = styled.div`
  width: 70px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: var(--green-dark);
  font-weight: 600;
  background-color: var(--white-0);
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }

  span {
    font-size: 16px;
  }
`
