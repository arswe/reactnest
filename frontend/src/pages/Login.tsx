import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import Auth from '../layouts/Auth'

const Login = () => {
  const { login, error } = useLogin()
  return (
    <div>
      <Auth submitLabel='Login' onSubmit={(request) => login(request)} error={error ? 'Invalid credentials' : ''}>
        <Link to={'/register'}>Register</Link>
      </Auth>
    </div>
  )
}

export default Login
