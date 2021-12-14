import React from 'react'
import type { Concert } from '../../types'
import Card from './Card'

export default {
  title: 'Component/Card',
  component: Card,
}

const concert: Concert[] = [
  {
    mainAct: 'ZSK',
    support: 'Donots',
    concertDate: '2022-02-04',
    location: 'zakk Düsseldorf',
    numberOfTickets: 2,
  },
  {
    mainAct: 'Radio Havanna',
    concertDate: '2022-05-03',
    location: 'Rosenhof Osnabrück',
    numberOfTickets: 3,
  },
]

function handleDeleteClick(concert: Concert) {
  console.log(`${concert} deleted`)
}

export const CardWithSupport = (): JSX.Element => (
  <Card concert={concert[0]} onDeleteClick={handleDeleteClick} />
)

export const CardWithoutSupport = (): JSX.Element => (
  <Card concert={concert[1]} onDeleteClick={handleDeleteClick} />
)
