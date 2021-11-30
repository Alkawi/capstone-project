import React from 'react'
import UpdatePasswordForm from './UpdatePasswordForm'

export default {
  title: 'Component/UpdatePasswordForm',
  component: UpdatePasswordForm,
}

function handleSubmit(
  username: string,
  password: string,
  newPassword: string
): void {
  console.log(`Changed ${username}s from ${password} to ${newPassword}`)
}

export const UserFormLogin = (): JSX.Element => (
  <UpdatePasswordForm onSubmit={handleSubmit} username="Peter" />
)
