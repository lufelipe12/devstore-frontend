import { FormHTMLAttributes, ReactNode } from "react"
import { Container, Title } from "./styles"

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
  title: string
}

const Form = ({ title, children, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}

export default Form
