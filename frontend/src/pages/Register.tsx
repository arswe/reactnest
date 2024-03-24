import { Link } from 'react-router-dom'
import { useCreateUser } from '../hooks/useCreateUser'
import Auth from '../layouts/Auth'

const Register = () => {
  const [createUser] = useCreateUser()
  return (
    <Auth
      submitLabel='Register'
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: { createUserInput: { email, password } },
        })
      }}
    >
      <Link to={'/login'}>Login</Link>
    </Auth>
  )
}

export default Register
