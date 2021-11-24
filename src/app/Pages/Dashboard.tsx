import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import Card from '../components/Card/Card'

type Concert = {
  id: string
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
      {!showForm && (
        <main>
          <header>
            <Button onClick={handleClick}>Add concert</Button>
          </header>
          {concerts.map((concert) => (
            <Card
              key={concert.id}
              mainAct={concert.mainAct}
              support={concert.support}
              concertDate={concert.concertDate}
              location={concert.location}
              numberOfTickets={concert.numberOfTickets}
            />
          ))}
        </main>
      )}
      {showForm && (
        <main>
          <Form onSubmit={handleSubmit} />
        </main>
      )}
    </div>
  )
}
