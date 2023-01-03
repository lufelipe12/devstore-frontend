import MyInput from "../../components/Input"
import Form from "../../components/Form"
import Button from "../../components/Button"
import { RegisterPageContainer } from "./styles"

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <Form title="Cadastro">
        <MyInput label="name" />
        <MyInput label="email" />
        <MyInput label="password" type="password" />
        <Button>Cadastrar</Button>
      </Form>
    </RegisterPageContainer>
  )
}

export default RegisterPage
