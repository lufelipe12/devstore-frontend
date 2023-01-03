import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"
import { Container } from "./styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const Button = ({ children, type, ...rest }: Props) => {
  return (
    <Container type={type ? type : "button"} {...rest}>
      {children}
    </Container>
  )
}

export default Button
