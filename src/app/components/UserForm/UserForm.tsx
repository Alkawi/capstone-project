import React, { useState } from 'react'
import Button from '../Button/Button'
import styled from 'styled-components'

type UserFormProps = {
  formType: 'Login' | 'Register' | 'Update'
  onSubmit: (username: string, password: string, newPassword?: string) => void
}

export default function UserForm({
  formType,
  onSubmit,
}: UserFormProps): JSX.Element {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    formType !== 'Update'
      ? onSubmit(username, password)
      : onSubmit(username, password, newPassword)
  }

  return (
    <FormContainer onSubmit={(event) => handleSubmit(event)}>
      {formType !== 'Update' ? (
        <InputContainer>
          <Label>
            Username:
            <Input
              type="text"
              minLength={5}
              maxLength={25}
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Label>
          <Label>
            Password:
            <Input
              type="password"
              minLength={8}
              maxLength={64}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Label>
        </InputContainer>
      ) : (
        <InputContainer>
          <Label>
            Old password:
            <Input
              type="password"
              minLength={8}
              maxLength={64}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
      )}
      <Button>{formType}</Button>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-orange);
  padding: 20px;
  color: var(--color-font-dark);
  font-size: 1.5rem;
`
const InputContainer = styled.div`
  display: contents;
`
const Input = styled.input`
  border: 0;
  border-radius: 5px;
  height: 1.5rem;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
`
