import React from 'react'
import styled from 'styled-components'

export default function Form(): JSX.Element {
  return (
    <AddForm action="">
      <Label>
        Main Act: <Input type="text" required />
      </Label>
      <Label>
        Support: <Input type="text" />
      </Label>
      <Label>
        Date: <Input type="date" required />
      </Label>
      <Label>
        Location: <Input type="text" required />
      </Label>
      <Label>
        Number of tickets: <Input type="number" required />
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
