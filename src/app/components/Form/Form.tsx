import React from 'react'

export default function Form(): JSX.Element {
  return (
    <form action="">
      <label>
        Main Act: <input type="text" required />
      </label>
      <label>
        Support: <input type="text" />
      </label>
      <label>
        Date: <input type="date" required />
      </label>
      <label>
        Location: <input type="text" required />
      </label>
      <label>
        Number of tickets: <input type="number" required />
      </label>
    </form>
  )
}
