import { createContext, ReactNode, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { useCookies } from "react-cookie"

import apiDevstore from "../../services/apiDevstore"
import { User, UserLogin } from "../../interfaces/user"

interface AuthProps {
  children: ReactNode
}

interface AuthContextData {
  isLoggedIn: boolean
  login: (user: UserLogin) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProps) => {
  const [cookies, setCookies, removeCookie] = useCookies([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logout = () => {
    removeCookie("@DEVSTORE:cookie" as never)
    setIsLoggedIn(false)
    return history.push("/login")
  }

  const history = useHistory()

  const login = async (user: UserLogin) => {
    await apiDevstore
      .post("auth/login", user)
      .then((response) => {
        setCookies("@DEVSTORE:cookie" as never, "cookietest", {
          maxAge: 2000000,
        })
        setIsLoggedIn(true)
        toast.success("Login efetuado")
        return history.push("/")
      })
      .catch((err) => {
        return toast.error(err.response.data.message || "Erro ao efetuar login")
      })
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
