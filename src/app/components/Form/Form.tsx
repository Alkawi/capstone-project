import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import type { Concert } from '../../types'

type FormProps = {
  onSubmit: (concert: Concert) => void
}

export default function Form({ onSubmit }: FormProps): JSX.Element {
  const [mainAct, setMainAct] = useState<string>('')
  const [support, setSupport] = useState<string>('')
  const [concertDate, setConcertDate] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [numberOfTickets, setNumberOfTickets] = useState<number>(1)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit({ mainAct, support, concertDate, location, numberOfTickets })
  }

  return (
    <AddForm onSubmit={(event) => handleSubmit(event)}>
      <Label>
        Main Act:{' '}
        <Input
          type="text"
          maxLength={50}
          required
          value={mainAct}
          onChange={(event) => setMainAct(event.target.value)}
        />
      </Label>
      <Label>
        Support:{' '}
        <Input
          type="text"
          maxLength={50}
          value={support}
          onChange={(event) => setSupport(event.target.value)}
        />
      </Label>
      <Label>
        Date:{' '}
        <Input
          type="date"
          max={'2099-12-31'}
          required
          value={concertDate}
          onChange={(event) => setConcertDate(event.target.value)}
        />
      </Label>
      <Label>
        Location:{' '}
        <Input
          type="text"
          maxLength={50}
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </Label>
      <Label>
        Number of tickets:{' '}
        <Input
          type="number"
          min={1}
          max={50}
          required
          value={numberOfTickets}
          onChange={(event) => setNumberOfTickets(event.target.valueAsNumber)}
        />
      </Label>
      <Button type="submit">Save and go back</Button>
    </AddForm>
  )
}

const AddForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
