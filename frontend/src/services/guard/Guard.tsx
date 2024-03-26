import { useGetMe } from '../../hooks/useGetMe'

interface GuardProps {
  children: JSX.Element
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe()
  console.log(user)
}

export default Guard
