import React from 'react'
import UpdatePasswordForm from './UpdatePasswordForm'

export default {
  title: 'Component/UpdatePasswordForm',
  component: UpdatePasswordForm,
}

function handleSubmit(password: string, newPassword: string): void {
  console.log(`Changed password from ${password} to ${newPassword}`)
}

export const UserFormLogin = (): JSX.Element => (
  <UpdatePasswordForm onSubmit={handleSubmit} />
)
