import { FieldValue, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import MyInput from "../../components/Input"
import Form from "../../components/Form"
import Button from "../../components/Button"
import { LoginPageContainer } from "./styles"
import { useAuth } from "../../providers/Auth"
import { UserLogin } from "../../interfaces/user"
import { useUsers } from "../../providers/Users"
import { useEffect } from "react"

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth()
  const { getProfile } = useUsers()

  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  })

  const refreshToken = (data: UserLogin) => {
    login(data)
  }

  useEffect(() => {
    if (isLoggedIn) {
      getProfile()
    }
  }, [isLoggedIn])

  return (
    <LoginPageContainer>
      <Form
        title="Fazer login"
        onSubmit={handleSubmit((data) => refreshToken(data as UserLogin))}
      >
        <MyInput
          label="email"
          register={register}
          name="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <MyInput
          type="password"
          label="password"
          register={register}
          name="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </LoginPageContainer>
  )
}

export default LoginPage
