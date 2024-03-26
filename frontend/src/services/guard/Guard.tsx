import { useGetMe } from '../../hooks/useGetMe'
import excludedRoutes from '../../routes/excluded-routes'

interface GuardProps {
  children: JSX.Element
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe()
  console.log(user)

  return <>{excludedRoutes.includes(window.location.pathname) ? children : user && children}</>
}

export default Guard
