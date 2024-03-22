import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

// ----------------------------------------------------------------------

import { Validator } from 'prop-types'

interface RouterLinkProps {
  href: string
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(({ href, ...other }, ref) => (
  <Link ref={ref} to={href} {...other} />
))

RouterLink.propTypes = {
  href: PropTypes.string.isRequired as Validator<string>,
}

export default RouterLink
