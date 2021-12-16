import React from 'react'
import Card from '../components/Card/Card'
import styled from 'styled-components'
import UpcomingConcerts from '../components/UpcomingConcerts/UpcomingConcerts'
import type { Concert } from '../types'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Dashboard(): JSX.Element {
  const { username } = useParams()
  const [concerts] = useFetch<Concert[]>(`/api/${username}/concerts`)

  return (
    <Container>
      <UpcomingConcerts concerts={concerts} />
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
  )
}

const Container = styled.main`
  display: grid;
  gap: 1rem;
  overflow-y: auto;
  grid-template-rows: auto 1fr;
`
const MissingConcerts = styled.article`
  align-self: center;
  border-radius: 8px;
  padding: 1rem;
  margin: 0 1rem;
  border: 1px solid var(--color-font-dark);
  background-color: var(--color-light-orange);
`
const CardContainer = styled.div`
  display: grid;
  gap: 1rem;
`
