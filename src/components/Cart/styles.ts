import styled from "styled-components"

interface CartStyleProp {
  isCartOpen: boolean
}

export const CartAside = styled.aside<CartStyleProp>`
  ${(props) => {
    if (!props.isCartOpen) {
      return `display: none`
    } else {
      return `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height:100vh;
      width:320px;
      background-color: var(--green-1);
      z-index:1;
      position:absolute;
      top: 0px;
      right:0px;
      padding: 10px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      svg{
        :hover{
          color:var(--green-dark);
          transition:0.5s;
        }
      }
      `
    }
  }}
`
export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  h2 {
    width: 180px;
  }
`

export const FinishDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;

  button {
    height: 40px;
    :hover {
      color: var(--green-dark);
      background-color: var(--white-0);
    }
  }

  h4 {
    width: 160px;
  }
`

export const PriceDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
