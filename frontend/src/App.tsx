import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import { Container, PaletteMode } from '@mui/material'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import { ToggleCustomThemeProps } from './entities/ToggleCustomThemeProps'
import getLPTheme from './themes/Theme'

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color='primary'
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label='Platform'
        sx={{ backgroundColor: 'background.default', '& .Mui-selected': { pointerEvents: 'none' } }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom
        </ToggleButton>
        <ToggleButton value={false}> Default </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('dark')
  const [showCustomTheme, setShowCustomTheme] = React.useState(true)
  const LPtheme = createTheme(getLPTheme(mode))
  const defaultTheme = createTheme({ palette: { mode } })

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev)
  }

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ bgcolor: 'background.default', pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>
        <Outlet />
      </Container>
      <ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
    </ThemeProvider>
  )
}
export default App
