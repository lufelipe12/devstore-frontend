import { useForm } from "react-hook-form"

import MyInput from "../../components/Input"
import Form from "../../components/Form"
import Button from "../../components/Button"
import { LoginPageContainer } from "./styles"
import { useUsers } from "../../providers/Users"

const LoginPage = () => {
  const { register, handleSubmit } = useForm()
  const { user, createUser } = useUsers()

  return (
    <LoginPageContainer>
      <Form
        title="Fazer login"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <MyInput label="email" register={register} name="email" />
        <MyInput
          type="password"
          label="password"
          register={register}
          name="password"
        />
        <Button>Entrar</Button>
      </Form>
    </LoginPageContainer>
  )
}

export default LoginPage
