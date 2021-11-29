import React, { useState } from 'react'
import Button from '../Button/Button'

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
    <form onSubmit={(event) => handleSubmit(event)}>
      {formType !== 'Update' ? (
        <div>
          <label>
            Username:
            <input
              type="text"
              minLength={5}
              maxLength={25}
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              minLength={8}
              maxLength={64}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
      ) : (
        <div>
          <label>
            Old password:
            <input
              type="password"
              minLength={8}
              maxLength={64}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            New password:
            <input
              type="password"
              minLength={8}
              maxLength={64}
              required
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </label>
        </div>
      )}
      <Button>{formType}</Button>
    </form>
  )
}
