import { TextField } from "@mui/material"
import { ForwardRefRenderFunction, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const MyInput: ForwardRefRenderFunction<HTMLInputElement, Props> = ({
  label,
  error,
}) => {
  return (
    <div>
      <TextField label={label} color="success" error={!!error} />
    </div>
  )
}

export default MyInput
