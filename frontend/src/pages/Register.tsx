import RouterLink from '../components/shared/RouterLink'
import Auth from '../layouts/Auth'

const Register = () => {
  return (
    <div>
      <Auth submitLabel='Register' onSubmit={async () => {}}>
        <RouterLink href={'/login'}>Login</RouterLink>
      </Auth>
    </div>
  )
}

export default Register
