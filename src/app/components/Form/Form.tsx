import React from 'react'
import styled from 'styled-components'

export default function Form(): JSX.Element {
  return (
    <AddForm action="">
      <Label>
        Main Act: <input type="text" required />
      </Label>
      <Label>
        Support: <input type="text" />
      </Label>
      <Label>
        Date: <input type="date" required />
      </Label>
      <Label>
        Location: <input type="text" required />
      </Label>
      <Label>
        Number of tickets: <input type="number" required />
      </Label>
    </AddForm>
  )
}

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
`
