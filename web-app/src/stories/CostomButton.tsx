import React from 'react'
import Button from '@mui/material/Button'
import './CustomButton.css'

interface CustomeButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const CustomButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CustomeButtonProps) => {
  const mode = primary ? 'storybook-custom-button--primary' : 'storybook-custom-button--secondary';
  return (
    <Button
      className={['storybook-custom-button', `storybook-custom-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  )
}
