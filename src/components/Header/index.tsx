import { BiLogInCircle, BiRocket, BiCart } from "react-icons/bi"
import { Tooltip } from "@mui/material"
import { useHistory } from "react-router-dom"

import { StyledHeader, StyledDiv, StyledCartDiv } from "./styles"

const Header = () => {
  const history = useHistory()

  const backToLanding = () => {
    return history.push("/")
  }

  const goToLogin = () => {
    return history.push("/login")
  }

  const goToRegister = () => {
    return history.push("/register")
  }

  const isLoggedIn = false

  return (
    <StyledHeader>
      <h1 onClick={backToLanding}>DEVSTORE</h1>
      {!isLoggedIn ? (
        <StyledDiv>
          <Tooltip title="login">
            <div onClick={goToLogin}>
              <BiLogInCircle cursor={"pointer"} />
            </div>
          </Tooltip>
          <Tooltip title="cadastro">
            <div onClick={goToRegister}>
              <BiRocket cursor={"pointer"} />
            </div>
          </Tooltip>
        </StyledDiv>
      ) : (
        <Tooltip title="carrinho">
          <StyledCartDiv>
            <div>
              <BiCart />
            </div>
            <span>0</span>
          </StyledCartDiv>
        </Tooltip>
      )}
    </StyledHeader>
  )
}

export default Header
