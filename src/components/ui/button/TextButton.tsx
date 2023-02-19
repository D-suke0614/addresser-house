import Button from '@mui/material/Button';
import * as React from "react";

interface TextButtonProps {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /**
   * text:文字列のみ
   * contained:枠とバックグラウンドからーあり
   * outlined:枠あり
   */
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  /**
   * 定義されている場合a要素がルートノードとして使用され、ボタンがクリックされたときに定義されたURLにアクセスする
   */
  href?: string;
  /**
   * trueの場合、ボタンはそのコンテナの幅いっぱいに表示される
   */
  fullWidth?: boolean;
  onClick?: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({
  label = 'BUTTON',
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  ...props
}: TextButtonProps) => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      {...props}
    >
      {label}
    </Button>
  )
}
