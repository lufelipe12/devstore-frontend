import MyInput from "../../components/Input"
import Form from "../../components/Form"
import Button from "../../components/Button"
import { LoginPageContainer } from "./styles"

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Form title="Fazer login">
        <MyInput label="email" />
        <MyInput label="password" type="password" />
        <Button>Entrar</Button>
      </Form>
    </LoginPageContainer>
  )
}

export default LoginPage
