import { createContext, ReactNode, useContext, useState } from "react"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

import apiDevstore from "../../services/apiDevstore"
import { UserToCreate, User } from "../../interfaces/user"

interface UserProps {
  children: ReactNode
}

interface UsersContextData {
  user?: User
  createUser: (newUser: UserToCreate) => Promise<void>
}

const UserContext = createContext<UsersContextData>({} as UsersContextData)

export const UserProvider = ({ children }: UserProps) => {
  const history = useHistory()

  const [user, setUser] = useState<User>()

  const createUser = async (newUser: UserToCreate) => {
    apiDevstore
      .post("users", newUser)
      .then((res) => {
        setUser(res.data)
        toast.success("Tudo certo para fazer seu login.", {
          position: "bottom-right",
        })
        return history.push("login")
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "bottom-right",
        })
      })
  }

  return (
    <UserContext.Provider value={{ user, createUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUsers = () => useContext(UserContext)