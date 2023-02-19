import TextField from '@mui/material/TextField';
import * as React from 'react';

interface TextInputProps {
  autoComplete?: string;
  autoFocus?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;

  /**
   * 入力されたヘルパーテキストを表示する
   */
  helperText?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  size?: 'medium' | 'small';
  value?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  onChange?: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  label = 'Input here',
  color = 'primary',
  size = 'small',
  variant = 'standard',
  ...props
}: TextInputProps) => {
  return (
    <TextField
      label={label}
      color={color}
      size={size}
      variant={variant}
      {...props}
    />
  )
}
