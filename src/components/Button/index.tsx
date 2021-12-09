import { ButtonHTMLAttributes } from 'react'
import React from 'react'

import { Buttons, StyledButtonProps } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyledButtonProps;

const Button = ({ ...props }: ButtonProps) => {
  return <Buttons {...props} />
}

export default Button
