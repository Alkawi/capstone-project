import React from 'react'
import Card from '../components/Card/Card'
import styled from 'styled-components'
import UpcomingConcerts from '../components/UpcomingConcerts/UpcomingConcerts'
import type { Concert } from '../types'
import Button from '../components/Button/Button'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Dashboard(): JSX.Element {
  const { username } = useParams()
  const concerts = useFetch<Concert[]>(`/api/${username}/concerts`)

  async function handleClick() {
    await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null,
    })
  }

  return (
    <div>
      <Container>
        <Header>
          <UpcomingConcerts concerts={concerts} />
          <Link to={`/${username}/addConcert`}>
            <Button>Add concert</Button>
          </Link>
        </Header>
        <CardContainer>
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
        </CardContainer>
      </Container>
    </div>
  )
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Container = styled.main`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 1fr;
  padding: 1rem;
`
const MissingConcerts = styled.article`
  align-self: center;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid var(--color-font-dark);
  background-color: var(--color-light-orange);
`
const CardContainer = styled.div`
  display: grid;
  overflow-y: auto;
  gap: 1rem;
`
