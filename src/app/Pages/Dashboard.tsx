import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Form from '../components/Form/Form'
import Card from '../components/Card/Card'
import styled from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'
import { v4 as uuid } from 'uuid'
import UpcomingConcerts from '../components/UpcomingConcerts/UpcomingConcerts'
import type { Concert } from '../types'

export default function Dashboard(): JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false)
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
    setShowForm(false)
  }

  function handleClick(): void {
    setShowForm(true)
  }

  return (
    <div>
      {!showForm && (
        <Container>
          <Header>
            <UpcomingConcerts concerts={concerts} />
            <Button onClick={handleClick}>Add concert</Button>
          </Header>
          {concerts &&
            concerts.map((concert) => (
              <Card key={concert.id} concert={concert} />
            ))}
          {!concerts && (
            <MissingConcerts>
              <h2>No concerts available</h2>
              <p>Please add a concert</p>
            </MissingConcerts>
          )}
        </Container>
      )}
      {showForm && (
        <main>
          <Form onSubmit={handleSubmit} />
        </main>
      )}
    </div>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  padding: 20px;
  background-color: var(--color-orange);
  overflow-y: scroll;
`
const MissingConcerts = styled.article`
  align-self: center;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--color-font-dark);
  background-color: var(--color-light-orange);
`
