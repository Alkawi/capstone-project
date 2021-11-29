import React from 'react'

export default function UserForm(): JSX.Element {
  return (
    <form>
      <label>
        Username: <input type="text" minLength={5} maxLength={25} required />
      </label>
      <label>
        Password:{' '}
        <input type="password" minLength={8} maxLength={64} required />
      </label>
    </form>
  )
}
