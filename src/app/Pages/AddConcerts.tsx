import React from 'react'
import Form from '../components/Form/Form'
import type { Concert } from '../types'

import { useNavigate, useParams } from 'react-router'

export default function AddConcerts(): JSX.Element {
  const navigate = useNavigate()
  const { username } = useParams()

  async function handleSubmit(concert: Concert): Promise<void> {
    await fetch(`/api/${username}/concerts/add`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(concert),
    })

    navigate(`/${username}`)
  }

  return (
    <main>
      <Form onSubmit={handleSubmit} />
    </main>
  )
}
