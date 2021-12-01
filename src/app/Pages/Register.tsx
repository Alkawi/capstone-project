import React from 'react'
import UserForm from '../components/UserForm/UserForm'

export default function Register(): JSX.Element {
  function handleSubmit(username: string, password: string) {
    console.log(`Registered ${username} with pw ${password}`)
  }

  return (
    <div>
      <h1>Registration</h1>
      <UserForm formType="Register" onSubmit={handleSubmit} />
    </div>
  )
}
