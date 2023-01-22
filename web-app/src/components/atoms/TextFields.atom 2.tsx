import React from "react";
import TextField from '@mui/material/TextField';

interface TextFieldProps {
  value?: any
  type?: string
  size?: 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  required?: boolean
  placeholder?: string
  disabled?: boolean
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  onChange?: () => void
}

export const TextFields = ({
  ...props
}: TextFieldProps) => {
  return (
    <TextField
      {...props}
    />
  )
}
