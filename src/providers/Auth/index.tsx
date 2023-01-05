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
  isLoggedIn?: boolean
  userLoggedIn?: User
  login: (user: UserLogin) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProps) => {
  const [cookies, setCookies, removeCookie] = useCookies([])
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>()
  const [userLoggedIn, setUserLoggedIn] = useState<User>()

  const logout = () => {
    setIsLoggedIn(false)
    return history.push("/login")
  }

  const history = useHistory()

  const login = async (user: UserLogin) => {
    await apiDevstore
      .post("auth/login", user, { withCredentials: true })
      .then((response) => {
        setIsLoggedIn(true)
        toast.success("Login efetuado")
        history.push("/")
        setUserLoggedIn(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
