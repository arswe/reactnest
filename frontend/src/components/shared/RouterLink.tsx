import { Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  href: string
  children: string | JSX.Element | JSX.Element[]
}

const RouterLink = ({ href, children }: Props) => {
  return (
    <Link to={href}>
      <MuiLink>{children}</MuiLink>
    </Link>
  )
}

export default RouterLink
