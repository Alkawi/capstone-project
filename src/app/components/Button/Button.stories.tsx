import React from 'react'
import Button from './Button'

export default {
  title: 'Component/Button',
  component: Button,
}

export const Add = (): JSX.Element => (
  <Button onClick={() => console.log('Add concert')}>Add concerts</Button>
)
export const Save = (): JSX.Element => (
  <Button onClick={() => console.log('Concert saved')}>Save and go back</Button>
)
