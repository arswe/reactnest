import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { NavbarProps } from '../../entities/NavbarProps'
import RouterLink from '../shared/RouterLink'
import ToggleColorMode from './ToggleColorMode'

function Navbar({ mode, toggleColorMode }: NavbarProps) {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          variant='regular'
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            borderColor: 'divider',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 3,
            }}
          >
            <Button variant='text' color='success' LinkComponent={RouterLink} href='/'>
              ReactNest
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <Button color='success' variant='outlined' size='small' component={Link} to='/login'>
              Sign In
            </Button>
            <Button color='primary' variant='contained' size='small' component={Link} to='/register'>
              Register
            </Button>
          </Box>
          <Box sx={{ display: { sm: '', md: 'none' } }}>
            <Button
              variant='text'
              color='primary'
              aria-label='menu'
              onClick={toggleDrawer(true)}
              sx={{ minWidth: '30px', p: '4px' }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ minWidth: '60dvw', p: 2, backgroundColor: 'background.paper', flexGrow: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', flexGrow: 1 }}>
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                </Box>

                <MenuItem>
                  <Button color='primary' variant='contained' component={Link} to='/login' sx={{ width: '100%' }}>
                    Login
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color='primary' variant='outlined' component={Link} to='/register' sx={{ width: '100%' }}>
                    Register
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
