import { BiLogInCircle, BiRocket, BiCart } from "react-icons/bi"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { Tooltip } from "@mui/material"
import { useHistory } from "react-router-dom"

import { StyledHeader, StyledDiv, StyledCartDiv, LogoutCartDiv } from "./styles"
import Cart from "../Cart"
import { useAuth } from "../../providers/Auth"

interface HeaderProps {
  isCartOpen: boolean
  cartStateManager: () => void
}

const Header = ({ isCartOpen, cartStateManager }: HeaderProps) => {
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

  const { isLoggedIn, logout } = useAuth()

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
        <>
          <LogoutCartDiv>
            <Tooltip title="Carrinho">
              <StyledCartDiv onClick={cartStateManager} isCartOpen={isCartOpen}>
                <div>
                  <BiCart />
                </div>
                <span>0</span>
              </StyledCartDiv>
            </Tooltip>
            <Tooltip title="Sair">
              <div onClick={logout}>
                <RiLogoutCircleRLine cursor="pointer" />
              </div>
            </Tooltip>
          </LogoutCartDiv>
          <Cart isCartOpen={isCartOpen} cartStateManager={cartStateManager} />
        </>
      )}
    </StyledHeader>
  )
}

export default Header
