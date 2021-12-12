import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import UserForm from '../components/UserForm/UserForm'

export default function Login(): JSX.Element {
  const navigate = useNavigate()

  async function handleSubmit(username: string, password: string) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    if (response.status === 200) {
      navigate(`/${username}`)
    } else {
      alert('Invalid login credentials')
    }
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
