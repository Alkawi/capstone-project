import React from 'react'
import UserForm from '../components/UserForm/UserForm'
import styled from 'styled-components'

export default function Register(): JSX.Element {
  function handleSubmit(username: string, password: string) {
    console.log(`Registered ${username} with pw ${password}`)
  }

  return (
    <LoginContainer>
      <Heading>Registration</Heading>
      <UserForm formType="Register" onSubmit={handleSubmit} />
    </LoginContainer>
  )
}

const Heading = styled.h1`
  color: var(--color-font-dark);
  align-self: center;
`
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
