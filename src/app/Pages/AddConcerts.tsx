import React from 'react'
import Form from '../components/Form/Form'
import type { Concert } from '../types'
import { v4 as uuid } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'
import { useNavigate } from 'react-router'

export default function AddConcerts(): JSX.Element {
  const navigate = useNavigate()
  const [concerts, setConcerts] = useLocalStorage<Concert[] | null>(
    'concerts',
    null
  )
  function handleSubmit(concert: Concert): void {
    const newConcert = { ...concert, id: uuid() }
    if (concerts) {
      setConcerts([...concerts, newConcert])
    } else {
      setConcerts([newConcert])
    }
    navigate('/')
  }

  return (
    <main>
      <Form onSubmit={handleSubmit} />
    </main>
  )
}
