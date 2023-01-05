import { TextField } from "@mui/material"
import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: any
  type?: string
  register: any
  name: string
  helperText?: string
}

const MyInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, error, type, register, name, helperText },
  ref
) => {
  return (
    <TextField
      label={label}
      color="success"
      error={!!error}
      type={type}
      ref={ref}
      {...register(name)}
      helperText={helperText}
    />
  )
}

export default MyInput
