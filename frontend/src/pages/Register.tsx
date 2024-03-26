import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreateUser } from '../hooks/useCreateUser'
import Auth from '../layouts/Auth'
import { extractErrorMessage } from '../services/utils/errors'

interface RegisterProps {
  email: string
  password: string
}

const Register = () => {
  const [createUser] = useCreateUser()
  const [error, setError] = useState('')

  const haandelSubmit = async ({ email, password }: RegisterProps) => {
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
  }

  return (
    <Auth submitLabel='Register' error={error} onSubmit={haandelSubmit}>
      <Link to={'/login'}>Login</Link>
    </Auth>
  )
}

export default Register
