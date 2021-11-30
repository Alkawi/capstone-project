import React from 'react'
import Form from './Form'

export default {
  title: 'Component/Form',
  component: Form,
}

export const AddForm = (): JSX.Element => (
  <Form onSubmit={() => console.log('Submitted')} />
)
