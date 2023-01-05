import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import MyInput from "../../components/Input"
import Form from "../../components/Form"
import Button from "../../components/Button"
import { RegisterPageContainer } from "./styles"
import { useUsers } from "../../providers/Users"
import { UserToCreate } from "../../interfaces/user"
import MotionRoutes from "../../configs/route-motion.config"

const RegisterPage = () => {
  const { createUser } = useUsers()

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
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

  return (
    <MotionRoutes>
      <RegisterPageContainer>
        <Form
          title="Cadastro"
          onSubmit={handleSubmit((data) => createUser(data as UserToCreate))}
        >
          <MyInput
            label="name"
            register={register}
            name="name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <MyInput
            label="email"
            register={register}
            name="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <MyInput
            label="password"
            type="password"
            register={register}
            name="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </RegisterPageContainer>
    </MotionRoutes>
  )
}

export default RegisterPage
