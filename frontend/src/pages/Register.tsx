import RouterLink from '../components/shared/RouterLink'
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
      <RouterLink href={'/login'}>Login</RouterLink>
    </Auth>
  )
}

export default Register
