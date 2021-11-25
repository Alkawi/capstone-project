import React from 'react'
import moment from 'moment'

type Concert = {
  id: string
  mainAct: string
  support?: string
  concertDate: Date
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

  return <span>Upcoming concerts: {numberOfUpcomingConcerts}</span>
}
