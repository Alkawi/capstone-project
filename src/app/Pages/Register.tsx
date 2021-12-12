import React from 'react'
import UserForm from '../components/UserForm/UserForm'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

export default function Register(): JSX.Element {
  const navigate = useNavigate()

  async function handleSubmit(username: string, password: string) {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    if (response.status === 201) {
      navigate('/login')
    } else {
      alert("User account couldn't be added")
    }
  }

  return (
    <RegistrationContainer>
      <Heading>Registration</Heading>
      <UserForm formType="Register" onSubmit={handleSubmit} />
      <LinkContainer>
        <Link to="/login">Log in</Link> to an existing account
      </LinkContainer>
    </RegistrationContainer>
  )
}

const Heading = styled.h1`
  color: var(--color-font-dark);
  align-self: center;
`
const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const LinkContainer = styled.span`
  color: var(--color-font-dark);
  align-self: center;
`
