import { Link } from 'react-router-dom'
import Auth from '../layouts/Auth'

const Login = () => {
  return (
    <div>
      <Auth submitLabel='Login' onSubmit={async () => {}}>
        <Link to={'/register'}>Register</Link>
      </Auth>
    </div>
  )
}

export default Login
