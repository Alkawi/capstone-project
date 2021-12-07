import React from 'react'
import { useParams } from 'react-router'
import UpdatePasswordForm from '../components/UpdatePasswordForm/UpdatePasswordForm'
import styled from 'styled-components'
import useFetch from '../hooks/useFetch'
import type { Concert } from '../types'

export default function UserProfile(): JSX.Element {
  const { username } = useParams()
  const concerts = useFetch<Concert[]>(`/${username}/concerts`)

  async function handleSubmit(password: string, newPassword: string) {
    const response = await fetch(`/${username}/changePassword`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, newPassword }),
    })

    if (response.status === 200) {
      alert('Password successfully changed')
    } else {
      alert("Password couldn't be changed")
    }
  }

  return (
    <PageContainer>
      <Heading>Profile</Heading>
      <UpdatePasswordForm onSubmit={handleSubmit} />
      <TotalConcerts>
        Total concerts: {concerts ? concerts.length : 0}
      </TotalConcerts>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  padding: 1rem;
  display: grid;
`
const Heading = styled.h1`
  justify-self: center;
`
const TotalConcerts = styled.span`
  color: var(--color-font-dark);
  justify-self: center;
`
