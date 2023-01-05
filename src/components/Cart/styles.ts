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
      justify-content: space-between;
      height:100vh;
      width:320px;
      background-color: var(--green-1);
      z-index: 2;
      position:absolute;
      top: 0px;
      right:0px;
      padding: 40px 10px;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      svg{
        :hover{
          color:var(--white-200);
          transition:0.5s;
        }
      }
      @media (min-width: 1440px) {
        width: 370px;
      }

  `
    }
  }}
`

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  h2 {
    width: 180px;
  }
`

export const WelcomeUser = styled.h4`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  width: 85%;
  margin-top: 15px;
`

export const ItemsSection = styled.section`
  width: 95%;
  max-height: 60%;
  padding: 5px 0px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 60%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
