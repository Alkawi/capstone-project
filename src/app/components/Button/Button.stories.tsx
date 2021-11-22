import React from 'react'
import Button from './Button'

export default {
  title: 'Component/Button',
  component: Button,
}

export const Add = (): JSX.Element => <Button>Add concerts</Button>
export const Save = (): JSX.Element => <Button>Save and go back</Button>
