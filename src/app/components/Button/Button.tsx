import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  children: ReactNode
}
function Button({ children }: ButtonProps): JSX.Element {
  return <StyledButton>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: var(--color-light-orange);
  color: var(--color-font-dark);
  border: 2px solid var(--color-blue);
`
