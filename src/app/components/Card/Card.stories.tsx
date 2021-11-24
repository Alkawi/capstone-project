import React from 'react'
import Card from './Card'

export default {
  title: 'Component/Card',
  component: Card,
}

export const CardWithSupport = (): JSX.Element => (
  <Card
    mainAct="ZSK"
    support="Donots"
    concertDate="2022-02-04"
    location="zakk Düsseldorf"
    numberOfTickets={2}
  />
)

export const CardWithoutSupport = (): JSX.Element => (
  <Card
    mainAct="Radio Havanna"
    concertDate="2022-05-03"
    location="Rosenhof Osnabrück"
    numberOfTickets={3}
  />
)
