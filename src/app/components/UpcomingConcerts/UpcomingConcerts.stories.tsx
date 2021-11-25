import React from 'react'
import UpcomingConcerts from './UpcomingConcerts'

export default {
  title: 'Component/UpcomingConcerts',
  component: UpcomingConcerts,
}
type Concert = {
  id: string
  mainAct: string
  support?: string
  concertDate: string
  location: string
  numberOfTickets: number
}
const concerts: Concert[] = [
  {
    id: '1',
    mainAct: 'ZSK',
    support: 'WIZO',
    concertDate: '2022-02-01',
    location: 'SO36',
    numberOfTickets: 2,
  },
  {
    id: '2',
    mainAct: 'Donots',
    concertDate: '2022-02-01',
    location: 'SO36',
    numberOfTickets: 2,
  },
]

export const Upcoming = (): JSX.Element => (
  <UpcomingConcerts concerts={concerts} />
)
