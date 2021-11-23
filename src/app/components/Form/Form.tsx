import React, { useState } from 'react'
import styled from 'styled-components'

type Concert = {
  mainAct: string
  support?: string
  concertDate: string
  location: string
  numberOfTickets: number
}

export default function Form(): JSX.Element {
  const [concert, setConcert] = useState<Concert>({
    mainAct: '',
    support: '',
    concertDate: '',
    location: '',
    numberOfTickets: 1,
  })

  return (
    <AddForm action="">
      <Label>
        Main Act:{' '}
        <Input
          type="text"
          required
          value={concert.mainAct}
          onChange={(event) =>
            setConcert({ ...concert, mainAct: event.target.value })
          }
        />
      </Label>
      <Label>
        Support:{' '}
        <Input
          type="text"
          value={concert.support}
          onChange={(event) =>
            setConcert({ ...concert, support: event.target.value })
          }
        />
      </Label>
      <Label>
        Date:{' '}
        <Input
          type="date"
          required
          value={concert.concertDate}
          onChange={(event) =>
            setConcert({ ...concert, concertDate: event.target.value })
          }
        />
      </Label>
      <Label>
        Location:{' '}
        <Input
          type="text"
          required
          value={concert.location}
          onChange={(event) =>
            setConcert({ ...concert, location: event.target.value })
          }
        />
      </Label>
      <Label>
        Number of tickets:{' '}
        <Input
          type="number"
          required
          value={concert.numberOfTickets}
          onChange={(event) =>
            setConcert({
              ...concert,
              numberOfTickets: event.target.valueAsNumber,
            })
          }
        />
      </Label>
    </AddForm>
  )
}

const AddForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-orange);
  padding: 20px;
  color: var(--color-font-dark);
  font-size: 1.5rem;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  border: 0;
  border-radius: 5px;
  height: 1.5rem;
`
