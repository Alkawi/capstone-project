import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

type UpdatePasswordFormProps = {
  onSubmit: (password: string, newPassword: string) => void
}

export default function UpdatePasswordForm({
  onSubmit,
}: UpdatePasswordFormProps): JSX.Element {
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    onSubmit(oldPassword, newPassword)
  }
  return (
    <FormContainer onSubmit={(event) => handleSubmit(event)}>
      <InputContainer>
        <Label>
          Old password:
          <Input
            type="password"
            minLength={8}
            maxLength={64}
            required
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
          />
        </Label>
        <Label>
          New password:
          <Input
            type="password"
            minLength={8}
            maxLength={64}
            required
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </Label>
      </InputContainer>

      <Button>Update</Button>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-orange);
  padding: 1rem;
  color: var(--color-font-dark);
  font-size: 1.5rem;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  display: contents;
`

const Input = styled.input`
  border: 0;
  border-radius: 5px;
  height: 1.5rem;
`
