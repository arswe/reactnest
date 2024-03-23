import { Button, Container, Stack, TextField } from '@mui/material'
import { useState } from 'react'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container maxWidth='sm'>
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        alignSelf='center'
        justifyContent={'center'}
        height={'60vh'}
        spacing={1}
        useFlexGap
        gap={4}
        sx={{ p: 2, width: { xs: '100%', sm: 'auto' } }}
      >
        <TextField
          id='Email'
          hiddenLabel
          size='small'
          variant='outlined'
          aria-label='Email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
