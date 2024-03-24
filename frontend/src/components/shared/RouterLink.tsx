import { Link } from '@mui/material'
import { ReactNode, forwardRef } from 'react'
import { Link as CustomLink, LinkProps as RouterLinkProps } from 'react-router-dom'

interface RouterLinkPropsWithChildren extends RouterLinkProps {
  children: ReactNode
}

const RouterLinkWithRef = forwardRef<HTMLAnchorElement, RouterLinkPropsWithChildren>((props, ref) => (
  <CustomLink ref={ref} {...props} />
))

const RouterLink = (props: RouterLinkPropsWithChildren) => {
  return <Link component={RouterLinkWithRef} {...props} />
}

export default RouterLink
