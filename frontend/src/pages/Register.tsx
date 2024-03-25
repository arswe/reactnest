import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreateUser } from '../hooks/useCreateUser'
import Auth from '../layouts/Auth'
import { extractErrorMessage } from '../services/utils/errors'

const Register = () => {
  const [createUser] = useCreateUser()

  const [error, setError] = useState('')

  return (
    <Auth
      submitLabel='Register'
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: { createUserInput: { email, password } },
          })
          setError('')
        } catch (err) {
          const errorMessage = extractErrorMessage(err)
          if (errorMessage) {
            setError(errorMessage)
            return
          }
        }
      }}
    >
      <Link to={'/login'}>Login</Link>
    </Auth>
  )
} 

export default Register
