import { Button, Container, Stack, TextField } from '@mui/material'

const Auth = () => {
  return (
    <Container maxWidth='sm'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        alignSelf='center'
        spacing={1}
        useFlexGap
        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
      >
        <TextField
          id='Email'
          hiddenLabel
          size='small'
          variant='outlined'
          aria-label='Email'
          placeholder='Email'
          inputProps={{
            autocomplete: 'off',
            ariaLabel: 'Email',
          }}
        />

        <TextField
          id='password'
          hiddenLabel
          size='small'
          variant='outlined'
          aria-label='Password'
          placeholder='Password'
          inputProps={{
            autocomplete: 'off',
            ariaLabel: 'Password',
          }}
        />
        <Button variant='contained' color='primary'>
          Sign In
        </Button>
      </Stack>
    </Container>
  )
}

export default Auth
