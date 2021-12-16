import React from 'react'
import styled from 'styled-components'
import type { Concert } from '../../types'
import Button from '../Button/Button'

type CardProps = {
  concert: Concert
  onDeleteClick: (concert: Concert) => void
}

export default function Card({
  concert,
  onDeleteClick,
}: CardProps): JSX.Element {
  function handleDeleteClick() {
    onDeleteClick(concert)
  }

  return (
    <CardContainer>
      <h2>{concert.mainAct}</h2>
      {concert.support && <span>Support: {concert.support}</span>}
      <span>{new Date(concert.concertDate).toLocaleString()}</span>
      <span>{concert.location}</span>
      <span>
        {concert.numberOfTickets} ticket{concert.numberOfTickets > 1 ? 's' : ''}
      </span>
      <Button onClick={() => handleDeleteClick()}>Delete concert</Button>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  align-self: center;
  border-radius: 8px;
  border: 1px solid var(--color-font-dark);
  padding: 1rem;
  margin: 0 1rem;
  background-color: var(--color-light-orange);
  color: var(--color-font-dark);
`
