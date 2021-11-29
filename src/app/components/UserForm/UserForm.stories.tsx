import React from 'react'
import UserForm from './UserForm'

export default {
  title: 'Component/UserForm',
  component: UserForm,
}

function handleLoginSubmit(username: string, password: string): void {
  console.log(`Logged in ${username}, ${password}`)
}

function handleRegisterSubmit(username: string, password: string): void {
  console.log(`Registered ${username}, ${password}`)
}

function handleUpdateSubmit(
  username: string,
  password: string,
  newPassword?: string
): void {
  console.log(`Update ${username}s PW from ${password} to ${newPassword}`)
}
export const UserFormLogin = (): JSX.Element => (
  <UserForm formType="Login" onSubmit={handleLoginSubmit} />
)
export const UserFormRegister = (): JSX.Element => (
  <UserForm formType="Register" onSubmit={handleRegisterSubmit} />
)
export const UserFormUpdate = (): JSX.Element => (
  <UserForm formType="Update" onSubmit={handleUpdateSubmit} />
)
