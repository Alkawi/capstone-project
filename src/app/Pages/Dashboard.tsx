import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'

type Concert = {
  mainAct: string
  support?: string
  concertDate: string
  location: string
  numberOfTickets: number
}

export default function Dashboard(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [concerts, setConcerts] = useState<Concert[]>([])

  function handleSubmit(concert: Concert): void {
    const newConcert = concert

    setConcerts([...concerts, newConcert])
    setShowForm(false)
  }

  function handleClick(): void {
    setShowForm(true)
  }

  return (
    <div>
      <main>
        <Button onClick={handleClick}>Add concert</Button>
      </main>
      <main>{showForm && <Form onSubmit={handleSubmit} />}</main>
    </div>
  )
}
