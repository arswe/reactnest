import RouterLink from '../components/shared/RouterLink'
import Auth from '../layouts/Auth'

const Login = () => {
  return (
    <div>
      <Auth submitLabel='Login' onSubmit={async () => {}}>
        <RouterLink href={'/register'}>Register</RouterLink>
      </Auth>
    </div>
  )
}

export default Login
