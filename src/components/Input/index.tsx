import { TextField } from "@mui/material"
import { ForwardRefRenderFunction, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  type?: string
}

const MyInput: ForwardRefRenderFunction<HTMLInputElement, Props> = ({
  label,
  error,
  type,
}) => {
  return (
    <div>
      <TextField label={label} color="success" error={!!error} type={type} />
    </div>
  )
}

export default MyInput
