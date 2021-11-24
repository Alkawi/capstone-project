import React from 'react'
import styled from 'styled-components'

type CardProps = {
  mainAct: string
  support?: string
  concertDate: string
  location: string
  numberOfTickets: number
}

export default function Card({
  mainAct,
  support,
  concertDate,
  location,
  numberOfTickets,
}: CardProps): JSX.Element {
  return (
    <CardContainer>
      <h2>{mainAct}</h2>
      {support && <span>Support: {support}</span>}
      <span>{concertDate}</span>
      <span>{location}</span>
      <span>{numberOfTickets} tickets</span>
    </CardContainer>
  )
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-light-orange);
  color: var(--color-font-dark);
`
