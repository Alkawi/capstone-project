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
    <article>
      <h2>{mainAct}</h2>
      {support && <span>Support: {support}</span>}
      <span>{concertDate}</span>
      <span>{location}</span>
      <span>{numberOfTickets} tickets</span>
    </article>
  )
}
