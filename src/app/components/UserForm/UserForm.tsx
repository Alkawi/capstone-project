import React, { useState } from 'react'
import Button from '../Button/Button'
import styled from 'styled-components'

type UserFormProps = {
  formType: 'Login' | 'Register'
  onSubmit: (username: string, password: string) => void
}

export default function UserForm({
  formType,
  onSubmit,
}: UserFormProps): JSX.Element {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    onSubmit(username, password)
  }

  return (
    <FormContainer onSubmit={(event) => handleSubmit(event)}>
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
      <Button>{formType}</Button>
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
