import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import illustration_404 from '../assets/illustration_404.svg'

const ErrorPage = () => {
  return (
    <Container>
      <Box
        sx={{
          py: 12,
          maxWidth: 480,
          mx: 'auto',
          display: 'flex',
          minHeight: '100vh',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h3' sx={{ mb: 3 }}>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
          spelling.
        </Typography>

        <Box component='img' src={illustration_404} sx={{ mx: 'auto', height: 260, my: { xs: 5, sm: 10 } }} />
        <Button to='/' size='large' variant='contained' component={Link}>
          Go to Home
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorPage
