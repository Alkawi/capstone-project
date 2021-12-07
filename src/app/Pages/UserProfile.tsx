import React from 'react'
import { /*useNavigate,*/ useParams } from 'react-router'
import UpdatePasswordForm from '../components/UpdatePasswordForm/UpdatePasswordForm'

export default function UserProfile(): JSX.Element {
  const { username } = useParams()
  //const navigate = useNavigate()

  async function handleSubmit(password: string, newPassword: string) {
    const response = await fetch(`/${username}/changePassword`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, newPassword }),
    })

    if (response.status === 200) {
      alert('Password successfully changed')
    } else {
      alert("Password couldn't be changed")
    }
  }

  return (
    <div>
      <h1>Profile</h1>
      <UpdatePasswordForm onSubmit={handleSubmit} />
    </div>
  )
}
