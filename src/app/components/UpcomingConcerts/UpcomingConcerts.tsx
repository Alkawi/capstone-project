import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

type Concert = {
  id: string
  mainAct: string
  support?: string
  concertDate: string
  location: string
  numberOfTickets: number
}

type UpcomingConcertsProps = {
  concerts: Concert[]
}
export default function UpcomingConcerts({
  concerts,
}: UpcomingConcertsProps): JSX.Element {
  const numberOfUpcomingConcerts = concerts.filter((concert) =>
    moment(concert.concertDate).isSameOrAfter(moment())
  ).length

  return <Upcoming>Upcoming concerts: {numberOfUpcomingConcerts}</Upcoming>
}

const Upcoming = styled.span`
  color: var(--color-font-dark);
`
