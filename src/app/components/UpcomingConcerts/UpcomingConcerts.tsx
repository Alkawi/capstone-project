import React from 'react'
import styled from 'styled-components'
import type { Concert } from '../../types'

type UpcomingConcertsProps = {
  concerts: Concert[] | null
}
export default function UpcomingConcerts({
  concerts,
}: UpcomingConcertsProps): JSX.Element {
  const numberOfUpcomingConcerts = concerts
    ? concerts.filter((concert) => new Date(concert.concertDate) >= new Date())
        .length
    : 0

  return <Upcoming>Upcoming concerts: {numberOfUpcomingConcerts}</Upcoming>
}

const Upcoming = styled.span`
  color: var(--color-font-dark);
  place-self: start center;
`
