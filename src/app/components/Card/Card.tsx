import React from 'react'
import styled from 'styled-components'
import type { Concert } from '../../types'

type CardProps = {
  concert: Concert
}

export default function Card({ concert }: CardProps): JSX.Element {
  return (
    <CardContainer>
      <h2>{concert.mainAct}</h2>
      {concert.support && <span>Support: {concert.support}</span>}
      <span>{concert.concertDate}</span>
      <span>{concert.location}</span>
      <span>{concert.numberOfTickets} tickets</span>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  border: 1px solid var(--color-font-dark);
  padding: 20px;
  background-color: var(--color-light-orange);
  color: var(--color-font-dark);
`
