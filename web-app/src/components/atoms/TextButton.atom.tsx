import React from 'react'
import Button from '@mui/material/Button'

interface TextButtonProps {
  /**
   * ボタンに表示されるラベル
   */
  label: string

  /**
   * ボタンのカラー
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

  disabled?: boolean
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const TextButton = ({
  label,
  color = 'primary',
  disabled = false,
  size = 'medium',
  ...props
}: TextButtonProps) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      {...props}
    >
      {label}
    </Button>
  )
}
