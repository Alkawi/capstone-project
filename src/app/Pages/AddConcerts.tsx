import React from 'react'
import Form from '../components/Form/Form'
import type { Concert } from '../types'

import { useNavigate, useParams } from 'react-router'

export default function AddConcerts(): JSX.Element {
  const navigate = useNavigate()
  const { username } = useParams()

  async function handleSubmit(concert: Concert): Promise<void> {
    const response = await fetch(`/api/${username}/concerts/add`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(concert),
    })
    if (response.status === 200) {
      navigate(`/${username}`)
    } else {
      alert("Concert couldn't be added")
    }
  }

  return (
    <main>
      <Form onSubmit={handleSubmit} />
    </main>
  )
}
