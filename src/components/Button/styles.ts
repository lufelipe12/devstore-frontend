import styled from "styled-components"

export const Container = styled.button`
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  color: var(--white-0);
  font-weight: 600;
  ${(props) => {
    if (props.color == "cart") {
      return `
        background-color: var(--green-dark);
        `
    } else {
      return `
        background-color: var(--green-0);
        `
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 0;
  transition: 0.5s;
  :hover {
    background: var(--green-1);
  }
`
