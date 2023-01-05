import { createContext, ReactNode, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { useCookies } from "react-cookie"

import apiDevstore from "../../services/apiDevstore"
import { UserLogin } from "../../interfaces/user"
import { toastOptions } from "../../configs/react-toast.config"

interface AuthProps {
  children: ReactNode
}

interface AuthContextData {
  isLoggedIn?: boolean
  login: (user: UserLogin) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProps) => {
  const [cookies, setCookie, removeCookie] = useCookies()
  const history = useHistory()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (cookies.AuthorizedDevStore) {
      return true
    }

    return false
  })

  const login = async (user: UserLogin) => {
    await apiDevstore
      .post("auth/login", user, { withCredentials: true })
      .then((response) => {
        setIsLoggedIn(true)
        toast.success("Login efetuado.", toastOptions)
        setCookie("AuthorizedDevStore", `${user.email}`, {
          maxAge: 2000000,
        })
        history.push("/")
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions)
        console.log(err)
      })
  }

  const logout = async () => {
    apiDevstore
      .post("auth/logout", null, { withCredentials: true })
      .then((res) => {
        setIsLoggedIn(false)
        removeCookie("AuthorizedDevStore")
        toast.success("Logout realizado.", toastOptions)
        history.push("/login")
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions)
        console.log(err)
      })
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
