import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserForm from '../components/UserForm/UserForm'

export default function Login(): JSX.Element {
  function handleSubmit(username: string, password: string) {
    console.log(`Logged in ${username} with pw ${password}`)
  }

  return (
    <LoginContainer>
      <Heading>Login</Heading>
      <UserForm formType="Login" onSubmit={handleSubmit} />
      <LinkContainer>
        <Link to="/register">Register</Link> for free
      </LinkContainer>
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
const LinkContainer = styled.span`
  color: var(--color-font-dark);
  align-self: center;
`
